import { useState, useEffect, useRef } from "react";

const correctAnswers = ["D", "D", "B", "D", "E", "C", "C", "A", "C", "D"];

export function QuizForm() {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);
  
  useEffect(() => {
    if (submitted) {
      const timer = setInterval(() => {
        counterRef.current += 10;
        setCounter((prevCounter) => {
          if (prevCounter + 10 > score) {
            clearInterval(timer);
            return score;
          }
          return prevCounter + 10;
        });
      }, 100);
    }
  }, [submitted, score]); 

  const handleSubmit = (event) => {
    event.preventDefault();

    let userScore = 0;

    const userAnswers = [
      event.target.question1.value,
      event.target.question2.value,
      event.target.question3.value,
      event.target.question4.value,
      event.target.question5.value,
      event.target.question6.value,
      event.target.question7.value,
      event.target.question8.value,
      event.target.question9.value,
      event.target.question10.value,
    ];

    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === correctAnswers[index]) {
        userScore += 10;
      }
    });

    setScore(userScore);
    setSubmitted(true);
    scrollTo(0, 0);
  };

  return (
    <>
      {submitted && (
        <div className="result py-4 bglight text-center">
          <div className="container lead">
            <p>
              You got
              <span className="percentColor display-4 p-3">{counter}%</span>
              of the quiz right!
            </p>
          </div>
        </div>
      )}

      <form
        action=""
        className="d-flex p-2 flex-column"
        onSubmit={handleSubmit}
      >
        <ol>
          <li>
            <h3>Where do Rachel and Ross go on their first date?</h3>
            <div>
              <input type="radio" name="question1" id="question1a" value="A" />
              <label htmlFor="question1a">Central Perk</label>
            </div>
            <div>
              <input type="radio" name="question1" id="question1b" value="B" />
              <label htmlFor="question1b">Ross's place</label>
            </div>
            <div>
              <input type="radio" name="question1" id="question1c" value="C" />
              <label htmlFor="question1c">Cinema</label>
            </div>
            <div>
              <input type="radio" name="question1" id="question1d" value="D" />
              <label htmlFor="question1d">Planetarium</label>
            </div>
            <div>
              <input type="radio" name="question1" id="question1e" value="E" />
              <label htmlFor="question1e">Central Park</label>
            </div>
            <p className="result first"></p>
          </li>
          <li>
            <h3>How many categories Monica organises her towels?</h3>
            <div>
              <input type="radio" name="question2" id="question2a" value="A" />
              <label htmlFor="question2a">7</label>
            </div>
            <div>
              <input type="radio" name="question2" id="question2b" value="B" />
              <label htmlFor="question2b">10</label>
            </div>
            <div>
              <input type="radio" name="question2" id="question2c" value="C" />
              <label htmlFor="questio2c">5</label>
            </div>
            <div>
              <input type="radio" name="question2" id="question2d" value="D" />
              <label htmlFor="question2d">11</label>
            </div>
            <div>
              <input type="radio" name="question2" id="question2e" value="E" />
              <label htmlFor="question2e">15</label>
            </div>
            <p className="result second"></p>
          </li>
          <li>
            <h3>
              In the season 6 Thanksgiving episode, what dessert does Rachel try
              and make?
            </h3>
            <div>
              <input type="radio" name="question3" id="question3a" value="A" />
              <label htmlFor="question3a">Cheesecake</label>
            </div>
            <div>
              <input type="radio" name="question3" id="question3b" value="B" />
              <label htmlFor="question3b">Trifle</label>
            </div>
            <div>
              <input type="radio" name="question3" id="question3c" value="C" />
              <label htmlFor="question3c">Chocolate cake</label>
            </div>
            <div>
              <input type="radio" name="question3" id="question3d" value="D" />
              <label htmlFor="question3d">Treacle tart</label>
            </div>
            <div>
              <input type="radio" name="question3" id="question3e" value="E" />
              <label htmlFor="question3e">Apple crumble</label>
            </div>
            <p className="result third"></p>
          </li>
          <li>
            <h3>How many sisters does Joey have?</h3>
            <div>
              <input type="radio" name="question4" id="question4a" value="A" />
              <label htmlFor="question4a">2</label>
            </div>
            <div>
              <input type="radio" name="question4" id="question4b" value="B" />
              <label htmlFor="question4b">1</label>
            </div>
            <div>
              <input type="radio" name="question4" id="question4c" value="C" />
              <label htmlFor="question4c">4</label>
            </div>
            <div>
              <input type="radio" name="question4" id="question4d" value="D" />
              <label htmlFor="question4d">7</label>
            </div>
            <div>
              <input type="radio" name="question4" id="question4e" value="E" />
              <label htmlFor="question4e">He doesn't have any sisters</label>
            </div>
            <p className="result fourth"></p>
          </li>
          <li>
            <h3>What is Phoebe's middle name?</h3>
            <div>
              <input type="radio" name="question5" id="question5a" value="A" />
              <label htmlFor="question5a">Ursula</label>
            </div>
            <div>
              <input type="radio" name="question5" id="question5b" value="B" />
              <label htmlFor="question5b">Steven</label>
            </div>
            <div>
              <input type="radio" name="question5" id="question5c" value="C" />
              <label htmlFor="question5c">Muriel</label>
            </div>
            <div>
              <input type="radio" name="question5" id="question5d" value="D" />
              <label htmlFor="question5d">Grace</label>
            </div>
            <div>
              <input type="radio" name="question5" id="question5e" value="E" />
              <label htmlFor="question5e">She never finds out</label>
            </div>
            <p className="result fifth"></p>
          </li>
          <li>
            <h3>
              Which Caribbean country does Ross's conference take place on in
              season 9?
            </h3>
            <div>
              <input type="radio" name="question6" id="question6a" value="A" />
              <label htmlFor="question6a">Jamaica</label>
            </div>
            <div>
              <input type="radio" name="question6" id="question6b" value="B" />
              <label htmlFor="question6b">Trinidad</label>
            </div>
            <div>
              <input type="radio" name="question6" id="question6c" value="C" />
              <label htmlFor="question6c">Barbados</label>
            </div>
            <div>
              <input type="radio" name="question6" id="question6d" value="D" />
              <label htmlFor="question6d">Aruba</label>
            </div>
            <div>
              <input type="radio" name="question6" id="question6e" value="E" />
              <label htmlFor="question6e">Grece</label>
            </div>
            <p className="result sixth"></p>
          </li>
          <li>
            <h3>When is Chandler's birthday?</h3>
            <div>
              <input type="radio" name="question7" id="question7a" value="A" />
              <label htmlFor="question7a">3th January</label>
            </div>
            <div>
              <input type="radio" name="question7" id="question7b" value="B" />
              <label htmlFor="question7b">6th Octuber</label>
            </div>
            <div>
              <input type="radio" name="question7" id="question7c" value="C" />
              <label htmlFor="question7c">8th April</label>
            </div>
            <div>
              <input type="radio" name="question7" id="question7d" value="D" />
              <label htmlFor="question7d">9th December</label>
            </div>
            <div>
              <input type="radio" name="question7" id="question7e" value="E" />
              <label htmlFor="question7e">15th July</label>
            </div>
            <p className="result seventh"></p>
          </li>
          <li>
            <h3>What is Rachel's dad's job?</h3>
            <div>
              <input type="radio" name="question8" id="question8a" value="A" />
              <label htmlFor="question8a">Doctor</label>
            </div>
            <div>
              <input type="radio" name="question8" id="question8b" value="B" />
              <label htmlFor="question8b">Lawyer</label>
            </div>
            <div>
              <input type="radio" name="question8" id="question8c" value="C" />
              <label htmlFor="question8c">Dentist</label>
            </div>
            <div>
              <input type="radio" name="question8" id="question8d" value="D" />
              <label htmlFor="question8d">Accountent</label>
            </div>
            <div>
              <input type="radio" name="question8" id="question8e" value="E" />
              <label htmlFor="question8e">Enginner</label>
            </div>
            <p className="result eighth"></p>
          </li>
          <li>
            <h3>
              What's the name of the high school that three of the Friends
              attended?
            </h3>
            <div>
              <input type="radio" name="question9" id="question9a" value="A" />
              <label htmlFor="question9a">Washington High School</label>
            </div>
            <div>
              <input type="radio" name="question9" id="question9b" value="B" />
              <label htmlFor="question9b">Kennedy High School</label>
            </div>
            <div>
              <input type="radio" name="question9" id="question9c" value="C" />
              <label htmlFor="question9c">Lincoln High School</label>
            </div>
            <div>
              <input type="radio" name="question9" id="question9d" value="D" />
              <label htmlFor="question9d">Bush High School</label>
            </div>
            <div>
              <input type="radio" name="question9" id="question9e" value="E" />
              <label htmlFor="question9e">East High School</label>
            </div>
            <p className="result ninth"></p>
          </li>
          <li>
            <h3>What does Phoebe's ex-husband do for a job?</h3>
            <div>
              <input
                type="radio"
                name="question10"
                id="question10a"
                value="A"
              />
              <label htmlFor="question10a">Vet</label>
            </div>
            <div>
              <input
                type="radio"
                name="question10"
                id="question10b"
                value="B"
              />
              <label htmlFor="question10b">Hand model</label>
            </div>
            <div>
              <input
                type="radio"
                name="question10"
                id="question10c"
                value="C"
              />
              <label htmlFor="question10c">Scients</label>
            </div>
            <div>
              <input
                type="radio"
                name="question10"
                id="question10d"
                value="D"
              />
              <label htmlFor="question10d">Ice skater</label>
            </div>
            <div>
              <input
                type="radio"
                name="question10"
                id="question10e"
                value="E"
              />
              <label htmlFor="question10e">Fireman</label>
            </div>
            <p className="result tenth"></p>
          </li>
        </ol>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
