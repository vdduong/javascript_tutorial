from flask import Flask
app = Flask(__name__)
 
@app.route("/")
def hello():
    return "Hello World!"
 
if __name__ == "__main__":
    app.run()


# Even if you don’t know Python very well this code shouldn’t be too difficult to understand. 
# One route gets setup which if you hit the endpoint with a browser or cURL you will get the text Hello World 
# returned back to you.
