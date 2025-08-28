<script lang="ts">
  import BlogPost from '$lib/components/BlogPost.svelte';
  
  const title = "How I Created a Fully Automated YouTube Channel with OpenAI";
  const date = "August 29, 2024";
  const category = "Automation";
  const readTime = "10 min read";
  const excerpt = "I recently noticed some automated YouTube Shorts and thought, \"Why not try making one myself?\" So, I decided to take it on as a fun side project. The goal was to create a YouTube channel that runs itself, producing and uploading content with minimal intervention.";
  
  const content = `
    <h2>The Idea</h2>
    <p>
        Hi there! I recently noticed some automated YouTube Shorts and thought, "Why not try making one myself?" 
        So, I decided to take it on as a fun side project. It's just a hobby for now, but who knows where it 
        might lead! The goal was to create a YouTube channel that runs itself, producing and uploading content 
        with minimal intervention.
    </p>

    <h2>Automation Overview</h2>
    <p>
        Imagine a YouTube channel that runs itself, creating and uploading videos while you relax. Sounds cool, 
        right? That's what I aimed to achieve using OpenAI's tools and some Python scripts. The process involves 
        generating book summaries, converting them into audio, creating thumbnails, and finally, stitching 
        everything together into a video. The entire workflow is automated, ensuring a steady stream of content 
        for the channel.
    </p>

    <h2>Getting Started</h2>
    <p>
        The journey begins with selecting a book title. The script takes this title, feeds it to OpenAI, and 
        generates a detailed summary. This step is crucial as it forms the core content of the video. The idea 
        is to provide viewers with concise yet informative book summaries that pique their interest. Here's a 
        sample of how the script grabs the book title and creates a summary:
    </p>

    <pre><code>import requests
import time

def generate_book_summary(book_title, api_key, max_retries=3, delay=2):
    url = "https://api.openai.com/v1/chat/completions"
    prompt = f"Summarize the book, make the summary around 525 words and keep the words and text simple '{book_title}'."

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "gpt-4",
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ]
    }

    attempts = 0
    while attempts < max_retries:
        try:
            response = requests.post(url, headers=headers, json=data)
            if response.status_code == 200:
                full_summary = response.json()['choices'][0]['message']['content']
                return full_summary
            else:
                attempts += 1
                time.sleep(delay)  # Wait for a bit before retrying
        except requests.RequestException as e:
            attempts += 1
            time.sleep(delay)  # Wait for a bit before retrying

    return "Max retries reached. Unable to generate summary.", []</code></pre>

    <h2>Transforming Text to Video</h2>
    <p>
        Once we have the summary, the next step is to transform it into a video. The summary is converted into a 
        voiceover using OpenAI's text-to-speech capabilities. This involves selecting a suitable voice and 
        ensuring the narration is clear and engaging. At the same time, a thumbnail is created using DALL-E, 
        which helps attract viewers to the video. Here's how you might convert the summary to speech:
    </p>

    <pre><code>from openai import OpenAI
import random
import time
from pathlib import Path

def text_to_speech(text, book_title, api_key, max_retries=3, delay=2):
    client = OpenAI(api_key=api_key)

    safe_book_title = book_title.replace(" ", "_").replace('"', '').replace(':', '').lower()
    directory_path = Path(__file__).parent / f"Videos/{safe_book_title}"

    try:
        directory_path.mkdir(parents=True, exist_ok=True)
    except Exception as e:
        print(f"Error creating directory: {e}")
        return

    speech_file_path = directory_path / "voice.mp3"

    voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"]
    selected_voice = random.choice(voices)

    attempts = 0
    while attempts < max_retries:
        try:
            response = client.audio.speech.create(
                model="tts-1",
                voice=selected_voice,
                input=text
            )

            response.stream_to_file(speech_file_path)
            print(f"Audio saved as {speech_file_path} using voice: {selected_voice}")
            return
        except Exception as e:
            print(f"Attempt {attempts + 1}: Error occurred - {e}")
            attempts += 1
            time.sleep(delay)  # Wait before retrying

    print("Max retries reached. Unable to generate speech.")</code></pre>

    <h2>Generating a Thumbnail</h2>
    <p>
        Thumbnails are the first thing viewers see, so they need to be eye-catching. Using OpenAI's DALL-E, we 
        can generate appealing thumbnails that are relevant to the book summary. The process involves crafting a 
        prompt that DALL-E can use to create the image. Here's how it's done:
    </p>

    <pre><code>from openai import OpenAI
import requests

def generate_book_thumbnail(book_title, api_key, max_retries=3, delay=2):
    client = OpenAI(api_key=api_key)
    prompt = f"Create a thumbnail for my YouTube video. The video is a book summary about the book '{book_title}'."

    attempts = 0
    while attempts < max_retries:
        try:
            response = client.images.generate(
                model="dall-e-3",
                prompt=prompt,
                size="1792x1024",
                quality="standard",
                n=1
            )

            image_url = response.data[0].url

            image_response = requests.get(image_url)
            safe_book_title = book_title.replace(" ", "_").replace('"', '').replace(':', '').lower()
            image_path = Path(__file__).parent / f"Videos/{safe_book_title}/image.png"
            with open(image_path, 'wb') as file:
                file.write(image_response.content)
            print(f"Thumbnail saved as {image_path}")
            return
        except Exception as e:
            print(f"Attempt {attempts + 1}: Error occurred - {e}")
            attempts += 1
            time.sleep(delay)  # Wait for a bit before retrying

    print("Max retries reached. Unable to generate thumbnail.")</code></pre>

    <h2>Adding Subtitles</h2>
    <p>
        Accessibility is important, so the script also generates subtitles. Subtitles help make the content more 
        inclusive and enhance the viewing experience. This step involves using OpenAI's Whisper model to 
        transcribe the audio into text and then format it as subtitles. Here's an example of generating 
        subtitles:
    </p>

    <pre><code>from openai import OpenAI
import time

def generate_subtitles(api_key, audio_file_path, max_retries=3, delay=2):
    client = OpenAI(api_key=api_key)

    attempts = 0
    while attempts < max_retries:
        try:
            with open(audio_file_path, "rb") as audio_file:
                response = client.audio.transcriptions.create(
                    model="whisper-1",
                    file=audio_file,
                    response_format="srt"
                )

            srt_content = response

            srt_file_path = audio_file_path.replace('.mp3', '.srt')
            with open(srt_file_path, "w") as srt_file:
                srt_file.write(srt_content)

            return srt_file_path
        except Exception as e:
            print(f"Attempt {attempts + 1}: Error occurred - {e}")
            attempts += 1
            time.sleep(delay)  # Wait before retrying

    print("Max retries reached. Unable to generate subtitles.")
    return None</code></pre>

    <h2>Uploading to YouTube</h2>
    <p>
        The final step is uploading the video to YouTube. This involves using Google's YouTube API, which 
        requires proper authentication and handling. The script prepares the video with appropriate metadata, 
        such as title, description, and tags, and then uploads it. Here's a snippet of the upload part:
    </p>

    <pre><code>from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
import pickle
import os

def service_youtube():
    creds = None
    token_file = 'youtube_token.pickle'
    client_secret_file = 'client_secret.json'
    scopes = ["https://www.googleapis.com/auth/youtube.upload"]

    if os.path.exists(token_file):
        with open(token_file, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(client_secret_file, scopes)
            creds = flow.run_local_server(port=0)

        with open(token_file, 'wb') as token:
            pickle.dump(creds, token)

    return build('youtube', 'v3', credentials=creds)

def upload_video_to_youtube(service, file_path, title, description, category_id, privacy_status):
    keywords = [
        'Book Summary', 'Self Help', 'Personal Growth', 'Motivation',
        'Life Improvement', 'Success', 'Mindfulness', 'Happiness',
        'Personal Development', 'Inspiration', 'Productivity', 'Well-being',
        'Life Hacks', 'Mental Health', 'Goal Setting', 'Self-Care',
        'Positive Thinking', 'Life Coaching', 'Self-Improvement', 'Empowerment',
        title  # Including the book title as a keyword
    ]

    body = {
        'snippet': {
            'title': title,
            'description': description,
            'tags': keywords,
            'categoryId': category_id
        },
        'status': {
            'privacyStatus': privacy_status
        }
    }

    media = MediaFileUpload(file_path, chunksize=-1, resumable=True, mimetype='video/*')
    insert_request = service.videos().insert(
        part=",".join(body.keys()),
        body=body,
        media_body=media
    )

    response = None
    while response is None:
        status, response = insert_request.next_chunk()
        if status:
            print(f"Uploaded {int(status.progress() * 100)}%")

    print(f"Video ID '{response['id']}' was successfully uploaded.")</code></pre>

    <h2>Challenges</h2>
    <p>
        Working with the YouTube API was quite tricky. It's not always straightforward, and there are many 
        limitations. For example, I had to handle quota limits and complex authorization flows. In one scenario, 
        I had to manage the daily quota effectively to ensure my videos were uploaded without hitting the 
        limits. The OpenAI APIs can also be unreliable at times, resulting in failed requests. To tackle this, I 
        implemented an exponential backoff strategy and automated retries. This ensures that the script can 
        recover from temporary issues and continue working without manual intervention.
    </p>

    <h2>Conclusion</h2>
    <p>
        This project has been incredibly rewarding. I now have a channel that educates and entertains. As it 
        grows, I plan to improve the video quality and add interactive elements.
    </p>

    <p>
        Check out the code behind this project on <a 
            href="#">GitHub</a> and 
        the channel itself on <a href="https://www.youtube.com/@SummariesDoneRight-ge8nk">YouTube</a>.
    </p>
  `;
</script>

<BlogPost 
  {title}
  {date}
  {category}
  {readTime}
  {excerpt}
  {content}
/>