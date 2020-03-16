FROM python:3.7

WORKDIR /usr/src/app
RUN pip install flask
RUN pip install flask_cors
RUN pip install feedparser

COPY . .

CMD [ "python", "app.py" ]