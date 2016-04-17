from myapp import app

@app.route("/")
def index():
    return dict()
    
@app.route("/echo/<str:msg>")
def echo(msg):
    return dict(message=msg)
    
@app.route("/editor")
def editor():
    return dict()
    
@app.route("/gallery")
def gallery():
    return dict()
    