from pypybox import app

@app.route("/")
def index():
    return dict(page = "home")
    
@app.route("/echo/<str:msg>")
def echo(msg):
    return dict(message = msg)
    
@app.route("/editor")
def editor():
    return dict(page = "editor")
    
@app.route("/gallery")
def gallery():
    return dict(page = "gallery")
    