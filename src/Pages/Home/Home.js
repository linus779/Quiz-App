import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions, numberofquestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const [quizNumber, setQuizNumber] = useState("");

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name || !quizNumber) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty,quizNumber);
            history.push("/quiz");
        }
    };


    return (
        <div className="content">
            <img src="/banner1.svg" className="banner1" alt="quiz app" />
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings__select">
                    {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                    <TextField
                        style={{ backgroundColor: "#e8eef8", marginBottom: 25 }}
                        label="Enter Your Name"
                        variant="filled"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        style={{ backgroundColor: "#e8eef8", marginBottom: 25 }}
                        label="Enter the number of questions from 1 to 50"
                        type="number"
                        value={quizNumber}
                        variant="filled"
                        onChange={(e) => setQuizNumber(e.target.value)}
                    />


                    <TextField
                        select
                        label="Select Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="filled"
                        style={{ backgroundColor: "#e8eef8", marginBottom: 30 }}
                    >
                        {Categories.map((cat) => (
                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        select
                        label="Select Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        variant="filled"
                        style={{ backgroundColor: "#e8eef8", marginBottom: 30 }}
                    >
                        <MenuItem key="Easy" value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem key="Medium" value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem key="Hard" value="hard">
                            Hard
                        </MenuItem>
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
                
            </div>
            <img src="/banner.svg" className="banner" alt="quiz app" />
        </div>
    );
};

export default Home;