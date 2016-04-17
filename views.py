from myapp import app

@app.route("/")
def index():
    return dict()
    
@app.route("/echo/<str:msg>")    
def echo(msgs):
    return dict(message=msgs)
    
@app.route("/editor")
def editor():
    return dict()
    
@app.route("/gallery")
def gallery():
    return dict()
    