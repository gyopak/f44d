from flask import Flask, redirect, url_for, request
from flask_cors import CORS, cross_origin
import json
import feedparser
import os

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

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/feed')
@cross_origin()
def feed():
   return json.dumps(ping())


if __name__ == '__main__':
   app.run(debug = True, host='0.0.0.0', port=os.environ['PORT'])
