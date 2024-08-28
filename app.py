from flask import Flask, request, render_template ,jsonify
from output import filter_courses_and_print_top_5  


app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")



@app.route('/',methods=['POST'])
def coursepred():
    data = request.get_json()
    # print("Form Data:", data) 
    rishi = data.get("rishita")
    level = rishi[0]
    hrs = int(rishi[1])
    keyword = rishi[2]
    final = [level, hrs, keyword]  # Create the final list
    # print("mai final hu",final)
    prediction = filter_courses_and_print_top_5(final)
    # print("mai prediction hu",prediction)
    return jsonify(prediction=prediction)
