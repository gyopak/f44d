from jinja2 import Environment, FileSystemLoader
import json
import feedparser
import requests
import re
import time

url = "http://444.hu/feed"
photo_url='http://4cdn.hu/kraken/image/upload/'

def get_feed():
    r = requests.get('http://444.hu/feed')
    req = feedparser.parse(r.text)
    return req.entries
    print(req.entries)
    # if req.status == 200:
    #     return req.entries
    # raise Exception('API', 'api unavailable')

def ping():
    posts = []
    for feed in get_feed():
        date = feed.published.split(', ')[1]
        date = date.split('+')[0]
        content = feed.content[0].value
        content = re.sub(r'https://embed.rtl+', '', content)
        content = re.sub(r'<iframe+', '', content)
        content = re.sub(r'https://e.infogram+', '', content)
        content = re.sub(r'https://twitter+', '', content)
        content = re.sub(r'src="/+', '', content)
        content = re.sub(r'xlink:href+', '', content)
        content = re.sub(r'style="+', '', content)
        content = re.sub(r'jeti-image+', '', content)
        content = re.sub(r'https://4cdn.hu+', '', content)
        content = re.sub(r'embed.js+', '', content)
        posts.append({
            "author": feed.author,
            "title": feed.title,
            "date": date,
            "content": content,
        })
    return posts


def render():
    feed = ping()
    env = Environment(loader=FileSystemLoader('templates'))
    template = env.get_template('index.html')
    output_from_parsed_template = template.render(time = time.ctime(), feed = feed)
    with open("index.html", "w") as fh:
        fh.write(output_from_parsed_template)

render()

