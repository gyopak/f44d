import time
import render
import os

clean = "git reset --hard origin/master && git pull"
publish = 'git add . && git commit --amend -C HEAD && git push -f > /dev/null'

def log(l):
    print('[{}] {}'.format(time.ctime(), l))
 
while True:
    log('clean env')
    os.system(clean)
    log('render 444')
    render.render()
    log('publish 444')
    os.system(publish)
    log('sleep 5mins')
    time.sleep(60 * 5)
