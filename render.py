from jinja2 import Environment, FileSystemLoader
import json
import feedparser
import time

url = "https://444.hu/feed"
photo_url='https://4cdn.hu/kraken/image/upload/'

def get_feed():
    req = feedparser.parse(url)
    if req.status == 200:
        return req.entries
    raise Exception('API', 'api unavailable')

def ping():
    posts = []
    for feed in get_feed():
        content = feed.content[0].value
        posts.append({
            "author": feed.author,
            "title": feed.title,
            "date": feed.published,
            "content": content,
        })
    return posts

feed = ping()

env = Environment(loader=FileSystemLoader('templates'))
template = env.get_template('index.html')
output_from_parsed_template = template.render(time = time.ctime(), feed = feed)

with open("index.html", "w") as fh:
    fh.write(output_from_parsed_template)
