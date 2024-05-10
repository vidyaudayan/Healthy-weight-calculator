
import React, { useState } from 'react';

const HealthyWeightCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [healthyWeightRange, setHealthyWeightRange] = useState('');
  const [bmiMessage, setBmiMessage] = useState(null);




  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);;
    setBMI(bmiValue);

    if (bmiValue < 18.50) {
      setBmiMessage("You are Underweight");

    } if (bmiValue >= 18.50 && bmi <= 25.00) {
      setBmiMessage('You are Normal weight');
    } if (bmiValue >= 25.00 && bmi <= 30.00) {
      setBmiMessage('You are Overweight');
    } if (bmiValue > 30) {
      setBmiMessage('You are Obese');
    }
  };

  const calculateHealthyWeightRange = () => {
    if (!bmi) {
      alert('Please calculate BMI first');
      return;
    }

    let lowerLimit, upperLimit;
    if (age >= 18 && gender === 'Male') {
      lowerLimit = 20;
      upperLimit = 25;
    } else if (age >= 18 && gender === 'Female') {
      lowerLimit = 18.5;
      upperLimit = 24.9;
    }
    else {
      alert('Age must be 18 or above for BMI calculation');
      return;
    }

    const lowerWeight = lowerLimit * height * height / 10000;
    const upperWeight = upperLimit * height * height / 10000;
    setHealthyWeightRange(`${lowerWeight.toFixed(2)} kg - ${upperWeight.toFixed(2)} kg`);
  };

  return (
    <div className='container'>

      <div className='sectionDiv'>
        <h2>Healthy Weight Range Calculator</h2>
        <div className='ageGender'>
          <label>
            Your Age:
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <label>
            Your Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="select"></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>


        <div className='heightWeight'>
          <label>
            Height (cm):
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>

          <label>
            Weight (kg):
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>

        </div>


        <button onClick={calculateBMI} className='bmiBtn'>Calculate BMI</button>
        {bmi && <p className='bmiValue'>BMI: {bmi.toFixed(2)}</p>}
        {bmi && bmiMessage && (
          <div className="result">

            <p>
              <span className="bmi-message">Result:{bmiMessage}</span>
            </p>

          </div>
        )}
        <button onClick={calculateHealthyWeightRange} className='weightBtn'>Calculate healthy weight range</button>
        {healthyWeightRange && (
          <p className='range'>
            Your healthy weight range is: {healthyWeightRange}
          </p>
        )}
      </div>

    </div>
  );
};

export default HealthyWeightCalculator;

