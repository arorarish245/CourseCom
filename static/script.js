const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const naitra = document.querySelector(".naitra");

let level = null;
let hrs = null;
let keyword = null;
let tocontinue = null;
const inputInitHeight = chatInput.scrollHeight;
let sample=[["Fashion as Design","https://www.coursera.org/learn/fashion-design","4.8","Anna Burckhardt, Paola Antonelli, Michelle Millar Fisher, Stephanie Kramer","The Museum of Modern Art","2813"],["Natural Language Processing with Classification and Vector Spaces","https://www.coursera.org/learn/classification-vector-spaces-in-nlp","4.6","Younes Bensouda Mourri, Łukasz Kaiser, Eddy Shyu","DeepLearning.AI","4206"],["Clinical Trials: Good Clinical Practice  Specialization","https://www.coursera.org/specializations/clinical-trials-good-clinical-practice","4.7","Novartis Learning","Novartis","22"],["Serverless Data Processing with Dataflow Specialization","https://www.coursera.org/specializations/serverless-data-processing-with-dataflow","4.1","Google Cloud Training","Google Cloud","84"], ["Supply Chain Principles","https://www.coursera.org/learn/supply-chain-principles","4.6","Timothy M Brown","Georgia Institute of Technology","2017"],["Teaching Impacts of Technology: Workplace of the Future","https://www.coursera.org/learn/teach-impacts-technology-workplace-future","0.0","Beth Simon","University of California San Diego","0"],["Introduction to Linear Algebra","https://www.coursera.org/learn/introduction-to-linear-algebra","0.0","David Easdown","The University of Sydney","0"],["Create Machine Learning Models in Microsoft Azure","https://www.coursera.org/learn/create-machine-learning-models-in-microsoft-azure","4.6"," Microsoft","Microsoft","184"],["Python Functions, Files, and Dictionaries","https://www.coursera.org/learn/python-functions-files-dictionaries","4.9","Paul Resnick, Steve Oney","University of Michigan","5171"], ["Blood Film Morphology - A Practical Guide","https://www.coursera.org/learn/blood-film-morphology","4.9","Matthew Wright","University of Western Australia","58"]]

for (let i = 0; i < sample.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${sample[i][0]}">${sample[i][0]}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${sample[i][0]}">${sample[i][0]}</option>
    `;
}

// Attach event listeners after defining the functions
document.getElementById("select1").addEventListener("change", function() {
    item1(this.selectedIndex);
});

document.getElementById("select2").addEventListener("change", function() {
    item2(this.selectedIndex);
});


function item1(a) {
    var select2 = document.getElementById("select2").value;
    if (a !== select2) {
        document.getElementById("title1").innerHTML = sample[a-1][0];
        document.getElementById("url1").innerHTML =sample[a-1][1];
        document.getElementById("ratings1").innerHTML = sample[a-1][2];
        document.getElementById("inst1").innerHTML = sample[a-1][3];
        document.getElementById("by1").innerHTML = sample[a-1][4];
        document.getElementById("reviews1").innerHTML =sample[a-1][5];
        
        // Populate other fields based on the selected item's data
    } else {
        document.getElementById("select1").selectedIndex = 0;
        document.getElementById("title1").innerHTML = "";
        document.getElementById("url2").innerHTML = "";
        document.getElementById("ratings2").innerHTML = "";
        document.getElementById("inst2").innerHTML = "";
        document.getElementById("by2").innerHTML = "";
        document.getElementById("reviews2").innerHTML = "";
        // Clear other fields as well
    }
}

// Define the item2 function
function item2(a) {
    var select1 = document.getElementById("select1").value;
    if (a !== select1) {
        document.getElementById("title2").innerHTML = sample[a-1][0];
        document.getElementById("url2").innerHTML = sample[a-1][1];
        document.getElementById("ratings2").innerHTML = sample[a-1][2];
        document.getElementById("inst2").innerHTML = sample[a-1][3];
        document.getElementById("by2").innerHTML = sample[a-1][4];
        document.getElementById("reviews2").innerHTML = sample[a-1][5];
        // Populate other fields based on the selected item's data
    } else {
        document.getElementById("select2").selectedIndex = 0;
        document.getElementById("title2").innerHTML = "";
        document.getElementById("url2").innerHTML = "";
        document.getElementById("ratings2").innerHTML = "";
        document.getElementById("inst2").innerHTML = "";
        document.getElementById("by2").innerHTML = "";
        document.getElementById("reviews2").innerHTML = "";
        // Clear other fields as well
    }
}


const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; 
}
// let arora = [];
let isha = [];
const generateResponse = (chatElement,index,newarora) => {
    const messageElement = chatElement.querySelector("p");
    if(index===0){
        messageElement.textContent = "Enter the level needed(Beginner, Intermediate, Advanced)";
    }
    else if(index===1)messageElement.textContent = "Enter the number of hours available for study: ";
    else if(index===2)messageElement.textContent = "Enter keyword: \n1.Arts and Humanities \n2.Business \n3.Computer Science \n4.DataScience \n5.Health \n6.Information Technology \n7.Math and logic \n8.Personal Development \n9.Physical Science and Engineering \n10.Social Sciences";
    else if(index==3){
        // console.log("mai arora hu",newarora)
        if(newarora.length===0){
            messageElement.textContent = "Sorry, No courses to display according to you specifications. \nDo you want more recommendations? (Yes/No)";
        }
        else{
            //naitra.textContent = arora;
            for (let i = 0; i < newarora.length; i++) {
    let ans = [];
    for (let j = 0; j < 2; j++) {
        ans.push(newarora[i][j] +"\n"); // Using <br> for line breaks in HTML
    }
    isha.push(String(i + 1) + ". " + ans.join('') +"\n"); // Join ans array elements and add a line break
}
// console.log("mai isha hu", isha);

messageElement.textContent  = isha.join('') + "Do you want more recommendations? (Yes/No)";
            
            
            // Define the item1 function
            function item1(a) {
                var select2 = document.getElementById("select2").value;
                // console.log("i am inside item",newarora);
                if (a !== select2) {
                    document.getElementById("title1").innerHTML = newarora[a-1][0];
                    document.getElementById("url1").innerHTML =newarora[a-1][1];
                    document.getElementById("ratings1").innerHTML = newarora[a-1][2];
                    document.getElementById("inst1").innerHTML = newarora[a-1][3];
                    document.getElementById("by1").innerHTML = newarora[a-1][4];
                    document.getElementById("reviews1").innerHTML =newarora[a-1][5];
                    
                    // Populate other fields based on the selected item's data
                } else {
                    document.getElementById("select1").selectedIndex = 0;
                    document.getElementById("title1").innerHTML = "";
                    document.getElementById("url2").innerHTML = "";
                    document.getElementById("ratings2").innerHTML = "";
                    document.getElementById("inst2").innerHTML = "";
                    document.getElementById("by2").innerHTML = "";
                    document.getElementById("reviews2").innerHTML = "";
                    // Clear other fields as well
                }
            }

            // Define the item2 function
            function item2(a) {
                var select1 = document.getElementById("select1").value;
                if (a !== select1) {
                    document.getElementById("title2").innerHTML = newarora[a-1][0];
                    document.getElementById("url2").innerHTML = newarora[a-1][1];
                    document.getElementById("ratings2").innerHTML = newarora[a-1][2];
                    document.getElementById("inst2").innerHTML = newarora[a-1][3];
                    document.getElementById("by2").innerHTML = newarora[a-1][4];
                    document.getElementById("reviews2").innerHTML = newarora[a-1][5];
                    // Populate other fields based on the selected item's data
                } else {
                    document.getElementById("select2").selectedIndex = 0;
                    document.getElementById("title2").innerHTML = "";
                    document.getElementById("url2").innerHTML = "";
                    document.getElementById("ratings2").innerHTML = "";
                    document.getElementById("inst2").innerHTML = "";
                    document.getElementById("by2").innerHTML = "";
                    document.getElementById("reviews2").innerHTML = "";
                    // Clear other fields as well
                }
            }


            const select1HTML = `
                            <option value="-1">-- Select Anyone --</option>
                        `;

                        const select2HTML = `
                            <option value="-1">-- Select Anyone --</option>
                        `;

                        document.getElementById("select1").innerHTML = select1HTML;
                        document.getElementById("select2").innerHTML = select2HTML;

            // Assuming `arora` is a 2D array where each inner array has 6 elements
            for (let i = 0; i < newarora.length; i++) {
                document.getElementById("select1").innerHTML += `
                <option value="${newarora[i][0]}">${newarora[i][0]}</option>
                `;
                document.getElementById("select2").innerHTML += `
                <option value="${newarora[i][0]}">${newarora[i][0]}</option>
                `;
            }

            // Attach event listeners after defining the functions
            document.getElementById("select1").addEventListener("change", function() {
                item1(this.selectedIndex);
            });

            document.getElementById("select2").addEventListener("change", function() {
                item2(this.selectedIndex);
            });

        }
    } 
    else if (index === 4) {
        messageElement.textContent = "Thank you for the visit.";
    }
    else return ;
    chatbox.scrollTo(0, chatbox.scrollHeight);
}
let index = 0;
let rishita ;


const sendfunction = async (rishita) => {
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rishita })
        });

        if (response.ok) {
            // console.log('Array sent successfully');
            const data = await response.json();
            // console.log('Prediction array received:', data.prediction);
            return data.prediction;
        } else {
            // console.error('Failed to send array to the backend');
            return null;
        }
    } catch (error) {
        // console.error('Error occurred while sending array to the backend:', error);
        return null;
    }
}

const handleChat = async () => {
    userMessage = chatInput.value.trim();
    if (index == 1) level = userMessage.concat(" level");
    else if (index == 2) hrs = userMessage;
    else if (index == 3) {
        keyword = userMessage;
        rishita = [level, hrs, keyword];
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        

         
        chatbox.appendChild(createChatLi("Please wait while we search for courses.", "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
                
        var newarora;
        

        let anotherTimeoutID = setTimeout(function() {
            chatbox.appendChild(createChatLi("It's taking a bit longer, Please wait.", "incoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 35000);
        
        newarora = await sendfunction(rishita);

        if(newarora.length > 0) {
            clearTimeout(anotherTimeoutID);
        }
            
    } else if (index == 4) {
        tocontinue = userMessage.toLowerCase();
        // console.log('tocontinue', tocontinue);
    }

    if (!userMessage || index > 5) index=0;

    if (index != 3) {
        chatInput.value = "";
        chatInput.style.height = `${inputInitHeight}px`;
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }

    setTimeout(() => {
        const incomingChatLi = createChatLi("To restart pls send a message", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);

        if (tocontinue === "yes") {
            index = 0;
            isha = [];
            tocontinue = "no";
            const select1HTML = `<option value="-1">-- Select Anyone --</option>`;
            const select2HTML = `<option value="-1">-- Select Anyone --</option>`;
            document.getElementById("select1").innerHTML = select1HTML;
            document.getElementById("select2").innerHTML = select2HTML;
        }

        generateResponse(incomingChatLi, index, newarora);
        index = index + 1;
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        // console.log("first",index);
        handleChat();
        
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//   }
  
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
})

