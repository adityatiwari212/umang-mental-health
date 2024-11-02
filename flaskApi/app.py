import pickle
from flask import Flask, request, jsonify
import numpy as np
app = Flask(__name__)

# Load the models from the pickle files
with open('lin_reg_anxiety_model.pkl', 'rb') as file:
    anxiety_model = pickle.load(file)

with open('lin_reg_ptsd_model.pkl', 'rb') as file:
    ptsd_model = pickle.load(file)

with open('lin_reg_bipolar_model.pkl', 'rb') as file:
    bipolar_model = pickle.load(file)

with open('lin_reg_depression_model.pkl', 'rb') as file:
    depression_model = pickle.load(file)

# Prediction route for Anxiety model
@app.route('/predict/anxiety', methods=['POST'])
def predict_anxiety():
    data = request.json
    input_data = data['input']  # Expecting an array of inputs
    prediction = anxiety_model.predict(np.array([input_data]))
    return jsonify({'prediction': prediction.tolist()})

# Prediction route for PTSD model
@app.route('/predict/ptsd', methods=['POST'])
def predict_ptsd():
    data = request.json
    input_data = data['input']
    prediction = ptsd_model.predict([input_data])
    return jsonify({'prediction': prediction.tolist()})

# Prediction route for Bipolar model
@app.route('/predict/bipolar', methods=['POST'])
def predict_bipolar():
    data = request.json
    input_data = data['input']
    prediction = bipolar_model.predict([input_data])
    return jsonify({'prediction': prediction.tolist()})

# Prediction route for Depression model
@app.route('/predict/depression', methods=['POST'])
def predict_depression():
    data = request.json
    input_data = data['input']
    prediction = depression_model.predict([input_data])
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
