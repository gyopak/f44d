import time
import render
import os

publish = 'git fetch --all && git reset --hard origin master && git add . && git commit --amend -C HEAD && git push -f > /dev/null'

while True:
    print('[{}] render f44d'.format(time.ctime()))
    render.render()
    print('[{}] publish f44d'.format(time.ctime()))
    os.system(publish)
    time.sleep(60 * 5)
