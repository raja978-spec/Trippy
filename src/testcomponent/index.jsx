/* eslint-disable no-undef */
// import './index.css';
// import SideBar from "./sidebar";
// import TrafficLight from './trafficlight';

// export default function Report(){

//   return(
//     <>
//     <SideBar/>
//     <TrafficLight/>
//     </>
//   )
// }
import './index.css'
function Report() {
  function selectChart() {
    var chartSelector = document.getElementById("chartSelector");
    var chartContainer = document.getElementById("chartContainer");
    var selectedChart = chartSelector.value;

    // Hide all charts
    var charts = chartContainer.getElementsByTagName("canvas");
    for (var i = 0; i < charts.length; i++) {
      charts[i].style.display = "none";
    }

    // Show the selected chart
    var selectedCanvas = document.getElementById(selectedChart);
    selectedCanvas.style.display = "block";
  }

  // Shared data for all charts
  var data = [
    { x: 10, y: 20, color: "#ff6384" },
    { x: 20, y: 30, color: "#36a2eb" },
    { x: 30, y: 40, color: "#ffce56" },
    { x: 40, y: 50, color: "#ffcc00" },
  ];

  // Draw pie chart
  var pieCanvas = document.getElementById("pieChart");
  if (pieCanvas !== null) {
    var pieCtx = pieCanvas.getContext("2d");
    var totalPie = data.reduce((acc, item) => acc + item.x, 0);
    var startAnglePie = 0;

    data.forEach((item) => {
      var sliceAnglePie = (2 * Math.PI * item.x) / totalPie;
      pieCtx.fillStyle = item.color;
      pieCtx.beginPath();
      pieCtx.moveTo(pieCanvas.width / 2, pieCanvas.height / 2);
      pieCtx.arc(
        pieCanvas.width / 2,
        pieCanvas.height / 2,
        pieCanvas.height / 2,
        startAnglePie,
        startAnglePie + sliceAnglePie
      );
      pieCtx.closePath();
      pieCtx.fill();
      startAnglePie += sliceAnglePie;
    });
  }
  // Draw bar chart
  var barCanvas = document.getElementById("barChart");
  if (barCanvas !== null) {
    var barCtx = barCanvas.getContext("2d");
    var maxBarValue = Math.max(...data.map((item) => item.y));
    var barWidth = 50;
    var startX = 20;
    var startY = barCanvas.height - 20;

    data.forEach((item, index) => {
      var barHeight = (item.y / maxBarValue) * (barCanvas.height - 40);
      barCtx.fillStyle = item.color;
      barCtx.fillRect(
        startX + index * (barWidth + 20),
        startY - barHeight,
        barWidth,
        barHeight
      );
    });
  }

  // Draw doughnut chart
  var doughnutCanvas = document.getElementById("doughnutChart");
  if (doughnutCanvas !== null) {
    var doughnutCtx = doughnutCanvas.getContext("2d");
    var totalDoughnut = data.reduce((acc, item) => acc + item.x, 0);
    var startAngleDoughnut = 0;

    var innerRadius = 50;
    var outerRadius = 100;
    var centerX = doughnutCanvas.width / 2;
    var centerY = doughnutCanvas.height / 2;

    data.forEach((item) => {
      var sliceAngleDoughnut = (2 * Math.PI * item.x) / totalDoughnut;
      doughnutCtx.fillStyle = item.color;
      doughnutCtx.beginPath();
      doughnutCtx.moveTo(centerX, centerY);
      doughnutCtx.arc(
        centerX,
        centerY,
        outerRadius,
        startAngleDoughnut,
        startAngleDoughnut + sliceAngleDoughnut
      );
      doughnutCtx.arc(
        centerX,
        centerY,
        innerRadius,
        startAngleDoughnut + sliceAngleDoughnut,
        startAngleDoughnut,
        true
      );
      doughnutCtx.closePath();
      doughnutCtx.fill();
      startAngleDoughnut += sliceAngleDoughnut;
    });
  }
  // Draw scatter plot chart
  var scatterCanvas = document.getElementById("scatterChart");
  if (scatterCanvas !== null) {
    var scatterCtx = scatterCanvas.getContext("2d");
    var maxX = Math.max(...data.map((item) => item.x));
    var maxY = Math.max(...data.map((item) => item.y));

    data.forEach((item) => {
      var x = (item.x / maxX) * (scatterCanvas.width - 20) + 10;
      var y =
        scatterCanvas.height -
        (item.y / maxY) * (scatterCanvas.height - 20) -
        10;
      scatterCtx.fillStyle = item.color;
      scatterCtx.beginPath();
      scatterCtx.arc(x, y, 5, 0, 2 * Math.PI);
      scatterCtx.closePath();
      scatterCtx.fill();
    });
  }

  // Draw radar chart
  var radarCanvas = document.getElementById("radarChart");
  if (radarCanvas !== null) {
    var radarCtx = radarCanvas.getContext("2d");
    var radarData = [30, 40, 50, 60];
    var radarColors = ["#ff6384", "#36a2eb", "#ffce56", "#ffcc00"];
    var numPoints = radarData.length;
    var angle = (Math.PI * 2) / numPoints;

    radarCtx.beginPath();
    for (var i = 0; i < numPoints; i++) {
      var x =
        radarCanvas.width / 2 +
        Math.cos(angle * i) *
          (radarData[i] / Math.max(...radarData)) *
          (radarCanvas.width / 2 - 20);
      var y =
        radarCanvas.height / 2 +
        Math.sin(angle * i) *
          (radarData[i] / Math.max(...radarData)) *
          (radarCanvas.height / 2 - 20);

      radarCtx.lineTo(x, y);
    }
    radarCtx.closePath();
    radarCtx.fillStyle = radarColors[0];
    radarCtx.fill();
  }


      /**
     * ---------------------------------------
     * This demo was created using amCharts 4.
     * 
     * For more information visit:
     * https://www.amcharts.com/
     * 
     * Documentation is available at:
     * https://www.amcharts.com/docs/v4/
     * ---------------------------------------
     */
    
    // // Themes begin
    // //am4core.useTheme(am4themes_dark);
    // //am4core.useTheme(am4themes_animated);
    // let value = 35;
    // // Themes end
    
    // // create chart
    // //var chart = am4core.create("chartdiv", am4charts.GaugeChart);
    // chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    // chart.innerRadius = -40;
    // chart.startAngle = -230;
    // chart.endAngle = 50;
    
    // //var axis = chart.xAxes.push(new am4charts.ValueAxis());
    // axis.min = 0;
    // axis.max = 100;
    // axis.strictMinMax = true;
    // axis.renderer.inside = false;
    // //axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
    // axis.renderer.grid.template.strokeOpacity = 0.3;
    // axis.renderer.labels.template.disabled = true;
    // axis.renderer.ticks.template.disabled = true;
    // axis.renderer.grid.template.disabled = true;
    
    // var colorSet = new am4core.ColorSet();
    
    // for(let i = 0; i < 100; i++) {
    //   /*var range0 = axis.axisRanges.create();
    //   range0.value = i;
    //   range0.endValue = i + 1;
    //   range0.axisFill.fillOpacity = 1;
    //   range0.axisFill.fill = colorSet.getIndex(0);
    //   range0.axisFill.zIndex = - 1;
    //   range0.radius = 100;*/
    // }
    
    // var gradient = new am4core.LinearGradient();
    // let color = '#3ec9bb';
    // gradient.stops.push({color:am4core.color("#009688")})
    // gradient.stops.push({color:am4core.color(color)})
    // //let color = '#fb192f';
    // //gradient.stops.push({color:am4core.color('#8f1521')})
    // //gradient.stops.push({color:am4core.color(color)})
    
    
    // var range0 = axis.axisRanges.create();
    // range0.value = 0;
    // range0.endValue = 50;
    // range0.axisFill.fillOpacity = 1;
    // range0.axisFill.fill = gradient;
    
    // var range1 = axis.axisRanges.create();
    // range1.value = 50;
    // range1.endValue = 100;
    // range1.axisFill.fillOpacity = 0.17;
    // range1.axisFill.fill = color;
    
    // var hand = chart.hands.push(new am4charts.ClockHand());
    // hand.showValue(value);
    // hand.radius = am4core.percent(70);
    // hand.startWidth = 20;
    // hand.endWidth = 0;
    // hand.pin.radius = 10;
    // hand.zIndex = 0;
    // hand.fill = '#dddddd';
    // hand.stroke = '#dddddd';
    
    // range0.endValue = value;
    // range1.value = value;
    
    // // using chart.setTimeout method as the timeout will be disposed together with a chart
    // //chart.setTimeout(randomValue, 2000);
    
    // function randomValue() {
    //     hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
    //     chart.setTimeout(randomValue, 2000);
    // }
    
    function displaySelectedPDF(input) {
            var selectedPDFContainer = document.getElementById('selected-pdf-container');
            var selectedPDF = document.getElementById('selected-pdf');
    
            if (input.files && input.files[0]) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    // Display the selected PDF below the button
                    selectedPDF.textContent = 'Selected PDF: ' + input.files[0].name;
                    selectedPDFContainer.style.display = 'block';
                };
    
                reader.readAsDataURL(input.files[0]);
            }
        }

    function updateTrafficLight() {
                var score = document.getElementById("score").value;
                var trafficLight = document.getElementById("trafficLight");
                var lights = trafficLight.getElementsByClassName("light");
                
                // Reset lights to default (all off)
                for (var i = 0; i < lights.length; i++) {
                    lights[i].classList.remove("red", "yellow", "green");
                }
                
                // Set lights based on score
                if (score >= 70) {
                    lights[2].classList.add("green");
                } else if (score >= 30) {
                    lights[1].classList.add("yellow");
                } else {
                    lights[0].classList.add("red");
                }
            }

    function displaySelectedPDF(input) {
            var selectedPDFContainer = document.getElementById('selected-pdf-container');
            var pdfViewer = document.getElementById('pdfViewer');
    
            if (input.files && input.files[0]) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    // Set the source of the PDF viewer to the data URL
                    pdfViewer.src = e.target.result;
                    // Display the PDF viewer
                    pdfViewer.style.display = 'block';
                };
    
                reader.readAsDataURL(input.files[0]);
            }
        }

        function displaySelectedPDF(input) {
            // Your existing code for displaying selected image can be reused or modified
            var selectedPDF = document.getElementById('selected-pdf');
            if (input.files && input.files[0]) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    // You can customize this part based on your requirements
                    selectedPDF.innerHTML = 'Selected PDF: ' + input.files[0].name;
                };
    
                reader.readAsDataURL(input.files[0]);
            }
        }

        function displaySelectedVideo(input) {
                var selectedVideoContainer = document.getElementById('selected-video-container');
                var selectedVideo = document.getElementById('selected-video');
    
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
    
                    reader.onload = function (e) {
                        // Set the source of the video element to the data URL
                        selectedVideo.src = e.target.result;
                        // Display the video element
                        selectedVideo.style.display = 'block';
                    };
    
                    reader.readAsDataURL(input.files[0]);
                }
            }

          function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'es,fr,de,ja,ko',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
            }
    
            function translatePage() {
                var translateElement = document.getElementById('google_translate_element');
                translateElement.style.display = 'block';
                new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
            }
    
            function displaySelectedImage(input) {
                var selectedImage = document.getElementById('selected-image');
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
    
                    reader.onload = function (e) {
                        selectedImage.src = e.target.result;
                        selectedImage.style.display = 'block'; // Display the selected image
                    };
    
                    reader.readAsDataURL(input.files[0]);
                }
            }

                    function execCmd(command) {
                document.execCommand(command, false, null);
            }
    
            function execCmdWithArg(command, arg) {
                document.execCommand(command, false, arg);
            }
    
            function createLink() {
                var url = prompt("Enter the URL:");
                if (url) {
                    document.execCommand('createLink', false, url);
                }
            }
    
            function setLineSpacing(value) {
                document.execCommand('defaultParagraphSeparator', false, 'div');
                document.execCommand('formatBlock', false, '<div style="line-height:' + value + '">');
            }
    
            document.getElementById('editor').addEventListener('input', function () {
                // Update your data or perform any desired action when the content changes
                var content = this.innerHTML;
                console.log(content);
            });
  return (
    <>
      <div class="sidebar">
        <title>Rich Text Editor</title>
        <div id="edit-options">
          <button onclick="execCmd('bold')">
            <i class="fas fa-bold">
              <span class="bold">B</span>
            </i>
          </button>
          <button onclick="execCmd('italic')">
            <i class="fas fa-italic"></i>
            <span class="italic">ITALIC</span>
          </button>
          <button onclick="execCmd('underline')">
            <i class="fas fa-underline">
              <span class="underline">UNDERLINE</span>
            </i>
          </button>
          <button onclick="execCmd('strikethrough')">
            <i class="fas fa-strikethrough">STRIKETHROUGH</i>
          </button>
          <button onclick="execCmd('removeFormat')">
            <i class="fas fa-eraser">ERASER</i>
          </button>
          <select
            id="headingDropdown"
            onchange="execCmdWithArg('formatBlock', this.value)"
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
            <option value="h5">Heading 5</option>
            <option value="h6">Heading 6</option>
          </select>
          <select
            id="fontFamilyDropdown"
            onchange="execCmdWithArg('fontName', this.value)"
          >
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Impact">Impact</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Geneva">Geneva</option>
            <option value="Palatino Linotype">Palatino Linotype</option>
            <option value="Book Antiqua">Book Antiqua</option>
            <option value="Palatino">Palatino</option>
            <option value="Garamond">Garamond</option>
            <option value="Courier">Courier</option>
            <option value="Lucida Console">Lucida Console</option>
          </select>
          <select
            id="lineSpacingDropdown"
            onchange="setLineSpacing(this.value)"
          >
            <option value="normal">Normal</option>
            <option value="1">1</option>
            <option value="1.15">1.15</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
          </select>
          <input
            type="color"
            id="fontColorInput"
            onchange="execCmdWithArg('foreColor', this.value)"
          />
          <input
            type="color"
            id="hiliteColorInput"
            onchange="execCmdWithArg('hiliteColor', this.value)"
          />
          <button onclick="execCmd('justifyLeft')">
            <i class="fas fa-align-left">A_LEFT</i>
          </button>
          <button onclick="execCmd('justifyCenter')">
            <i class="fas fa-align-center">A_CENTER</i>
          </button>
          <button onclick="execCmd('justifyRight')">
            <i class="fas fa-align-right">A_RIGHT</i>
          </button>
          <button onclick="execCmd('justifyFull')">
            <i class="fas fa-align-justify">A_JUSTIFY</i>
          </button>
          <button onclick="execCmd('insertOrderedList')">
            <i class="fas fa-list-ol">O_LIST</i>
          </button>
          <button onclick="execCmd('insertUnorderedList')">
            <i class="fas fa-list-ul">U_LIST</i>
          </button>
          <button onclick="execCmd('indent')">
            <i class="fas fa-indent">INDENT</i>
          </button>
          <button onclick="execCmd('outdent')">
            <i class="fas fa-outdent">OUTDENT</i>
          </button>
          <button onclick="createLink()">
            <i class="fas fa-link">LINK</i>
          </button>
          <button onclick="execCmd('unlink')">
            <i class="fas fa-unlink">UNLINK!</i>
          </button>
          <button onclick="execCmd('undo')">
            <i class="fas fa-undo">UNDO</i>
          </button>
          <button onclick="execCmd('redo')">
            <i class="fas fa-redo">REDO</i>
          </button>
        </div>
      </div>

      <div class="content">
        <div id="editor-container">
          <div id="editor" contenteditable="true">
            <div class="report-info">
              <h1>Welcome to Scorecard | Name Report</h1>
              <p>
                Use this space to explain why your scorecard and this report are
                important and who it’s aimed at. You may also use it to describe
                your company and show your authority on the subject matter. You
                can write about what is included in the report such as the
                helpful insights that will give your leads to improve their
                scores.
              </p>

              {/* Choose File Button */}
              <input
                type="file"
                class="file-input"
                id="fileInput"
                accept="image/*"
                onchange="displaySelectedImage(this)"
              />
              <label for="fileInput" class="file-button">
                Choose File
              </label>

              {/* Display Selected Image */}
              <div id="selected-image-container">
                <img id="selected-image" alt="Selected Image" />
              </div>
            </div>

            {/* Quiz Result Box */}

            <div class="result-box">
              <h2>Quiz Result</h2>
              <p>
                Total Score: <strong>s . $correctAnswers</strong>
              </p>
              <p>
                Total Questions: <strong>" . $totalQuestions</strong>
              </p>
              <p>
                Questions Attended: <strong>" . $totalAttended</strong>
              </p>
              <p>
                Correct Answers: <strong>" . $correctAnswers</strong>
              </p>
              <p>
                Incorrect Answers: <strong>" . $incorrectAnswers</strong>
              </p>
            </div>

            {/* Lorem Ipsum Div */}
            <div class="lorem-div">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusantium eligendi ducimus facere, quia est minus quaerat nemo
                tempora natus impedit quo tenetur in voluptates odio at
                distinctio voluptate. Dicta omnis ad velit. Non, sint alias,
                officia quisquam odio ad et ab a aliquid eius beatae voluptatem
                error quo deserunt aut perferendis? Fugiat, mollitia. Nisi sint
                nemo ad pariatur sed, eum minus tempore ratione, autem animi
                dolores corporis asperiores optio odit accusantium magni officia
                sunt laborum mollitia. Magni fugit tempora laborum saepe
                quisquam alias vero cumque provident dolore voluptates, porro,
                nesciunt, hic at soluta eveniet totam cupiditate dolor molestias
                quia a.
              </p>
            </div>
            <br></br>
            <div class="report-info">
              <select id="chartSelector" onchange="selectChart()">
                <option value="pieChart">Pie Chart</option>
                <option value="barChart">Bar Chart</option>
                <option value="doughnutChart">Doughnut Chart</option>
                <option value="scatterChart">Scatter Plot</option>
                <option value="radarChart">Radar Chart</option>
              </select>

              <div id="chartContainer">
                <canvas id="pieChart" width="400" height="400"></canvas>
                <canvas
                  id="barChart"
                  width="400"
                  height="400"
                  style={{ display: "none" }}
                ></canvas>
                <canvas
                  id="doughnutChart"
                  width="400"
                  height="400"
                  style={{ display: "none" }}
                ></canvas>
                <canvas
                  id="scatterChart"
                  width="400"
                  height="400"
                  style={{ display: "none" }}
                ></canvas>
                <canvas
                  id="radarChart"
                  width="400"
                  height="400"
                  style={{ display: "none" }}
                ></canvas>
              </div>
            </div>
            <div class="report-info">
                <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/dark.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
    <div id="chartdiv"></div>

    <div class="lorem-div">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eligendi ducimus facere, quia est minus quaerat nemo tempora natus impedit quo tenetur in voluptates odio at distinctio voluptate. Dicta omnis ad velit. Non, sint alias, officia quisquam odio ad et ab a aliquid eius beatae voluptatem error quo deserunt aut perferendis? Fugiat, mollitia. Nisi sint nemo ad pariatur sed, eum minus tempore ratione, autem animi dolores corporis asperiores optio odit accusantium magni officia sunt laborum mollitia. Magni fugit tempora laborum saepe quisquam alias vero cumque provident dolore voluptates, porro, nesciunt, hic at soluta eveniet totam cupiditate dolor molestias quia a. 
        </p>
    </div><br></br>
        </div>

              <div class="report-info">
                <div class="traffic-light" id="trafficLight">
            <div class="light red"></div>
            <div class="light yellow"></div>
            <div class="light green"></div>
        </div>
        
        <label for="score">Enter Score (0-100):</label>
        <input type="number" id="score" name="score" min="0" max="100" step="1" onchange="updateTrafficLight()"/>
        
        </div>{/* */}

        <div class="lorem-div">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium eligendi ducimus facere, quia est minus quaerat nemo tempora natus impedit quo tenetur in voluptates odio at distinctio voluptate. Dicta omnis ad velit. Non, sint alias, officia quisquam odio ad et ab a aliquid eius beatae voluptatem error quo deserunt aut perferendis? Fugiat, mollitia. Nisi sint nemo ad pariatur sed, eum minus tempore ratione, autem animi dolores corporis asperiores optio odit accusantium magni officia sunt laborum mollitia. Magni fugit tempora laborum saepe quisquam alias vero cumque provident dolore voluptates, porro, nesciunt, hic at soluta eveniet totam cupiditate dolor molestias quia a. 
                </p>
            </div><br></br><br></br><br></br>
            <div class="lorem-div">  
                  <input type="file" class="file-input" id="videoInput" accept="video/*" onchange="displaySelectedVideo(this)"/>
                <label for="videoInput" class="file-button">Choose Video</label>
                <br></br><br></br>
                {/* Display Selected Video */}
                <div id="selected-video-container">
                    <video id="selected-video" controls></video>
                </div>
            </div>
            <div class="report-info">
   {/* Inside the "report" class div */}
    <div class="report">
        {/* Choose PDF Button */}
        <input type="file" class="file-input" id="pdfInput" accept=".pdf" onchange="displaySelectedPDF(this)"/>
        <label for="pdfInput" class="file-button">Choose PDF</label>
    
        {/* Display Selected PDF */}
        <div id="selected-pdf-container">
            <p id="selected-pdf"></p>
        </div>
    </div>
    </div>{/* */}
       <div class="lorem">
        {/* Your existing content goes here */}
    
        {/* Save Button */}
        <button id="saveButton" onclick="saveData()">Save report</button>
    </div> {/*  */}

    <button class="translate-button" onclick="translatePage()">Translate</button>
    
        <div id="google_translate_element"></div>
    
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        {/*  */}

          </div>
        </div>
      </div>
    </>
  );
}

export default Report;


//               CSS
// body {
//             margin: 0;
//             padding: 0;
//         }

//         .sidebar {
//             height: 100%;
//             width: 250px;
//             position: fixed;
//             top: 0;
//             left: 0;
//             background-color: #333;
//             padding-top: 20px;
//         }

//         .sidebar ul {
//             list-style-type: none;
//             padding: 0;
//         }

//         .sidebar ul li {
//             padding: 10px;
//         }

//         .sidebar ul li a {
//             color: white;
//             text-decoration: none;
//         }

//         .content {
//             margin-left:250px;
//             padding: 20px;
//         }
//         #editor-container {
//             flex: 100;
//             padding: 100px;
//             background-color: #d6dfe0;
//         }

//         #editor {
//             border: 1px solid #ccc;
//             min-height: 400px;
//             background-color: #ec9a9a;
//         }

//         #edit-options {
//             display: flex;
//             flex-direction: column;
//             padding: 10px;
//             background-color: #faf6f8;
//             box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
//         }

//         button {
//             margin-bottom: 5px;
//             background-color: #b2b3a9;
//             border: none;
//             cursor: pointer;
//             padding: 5px;
//             border-radius: 3px;
//             transition: background-color 0.3s;
//             font-weight: bold;   
//         }

//         button:hover {
//             background-color: #1b1b1a;
//         }

//         select {
//             margin-bottom: 5px;
//             padding: 5px;
//             border-radius: 3px;
//         }

//         input[type="color"] {
//             margin-bottom: 5px;
//             padding: 3px;
//             border-radius: 3px;
//         }

//         /*  2 */
//         body {
//                 margin: 0;
//                 padding: 20px; /* Add padding to provide some space around the content */
//                 font-family: Arial, sans-serif;
//                 background-color: #f4f4f4; /* Set a background color for better visibility */
//                 display: flex;
//                 flex-direction: column;
//                 align-items: center;
//             }
    
//             .report-info {
//                 max-width: 600px; /* Adjust the width as needed */
//                 padding: 20px;
//                 border-radius: 8px;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
//                 text-align: center;
//                 margin-bottom: 20px; /* Add margin at the bottom for spacing */
//             }
    
//             .report-info h1 {
//                 color: #333;
//                 font-size: 24px;
//                 margin-bottom: 10px;
//             }
    
//             .report-info p {
//                 color: #555;
//                 font-size: 16px;
//                 line-height: 1.5;
//             }
    
//             /* Style the file input as a button */
//             .file-input {
//                 display: none; /* Hide the default file input */
//             }
    
//             .file-button {
//                 margin-top: 20px; /* Adjust the margin as needed */
//                 padding: 10px 20px;
//                 background-color: #3498db;
//                 color: #fff;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 display: inline-block;
//             }
    
//             #selected-image-container {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 flex-direction: column;
//                 margin-top: 10px; /* Adjust the margin as needed */
//             }
    
//             #selected-image {
//                 max-width: 600px; /* Set a fixed maximum width */
//                 max-height: 400px; /* Set a fixed maximum height */
//                 display: none; /* Hide the image initially */
//             }
    
//             .result-box {
//                 max-width: 600px;
//                 padding: 20px;
//                 border-radius: 8px;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                 text-align: center;
//                 margin-bottom: 20px;
//             }
    
//             .result-box h2 {
//                 color: #333;
//                 font-size: 20px;
//                 margin-bottom: 10px;
//             }
    
//             .result-box p {
//                 color: #555;
//                 font-size: 16px;
//                 line-height: 1.5;
//             }
    
//             .lorem-div {
//                 max-width: 600px;
//                 padding: 20px;
//                 border-radius: 8px;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                 text-align: center;
//             }
    
//             .lorem-div p {
//                 color: #555;
//                 font-size: 16px;
//                 line-height: 1.5;
//             }
    
//             .translate-button {
//                 position: fixed;
//                 top: 20px;
//                 right: 20px;
//                 padding: 10px 20px;
//                 border: none;
//                 border-radius: 5px;
//                 cursor: pointer;
//                 background-color: #3498db;
//                 color: #fff;
//             }
    
//             #google_translate_element {
//                 display: none; /* Hide the translation element by default */
//                 position: fixed;
//                 top: 60px; /* Adjust the top position as needed */
//                 right: 20px;
//             }

//             /* 3 */

//             canvas {
//                 display: block;
//                 margin: auto;
//                 margin-bottom: 20px;
//               }

//             /*  4 */

//                 body {
//       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
//     }
    
//     body { 
//       background-color: #fafafe; 
//       color: #fff; 
//       background: linear-gradient(to left, #e0e1e9, #dedfe6);
//     }
//     #chartdiv {
//       width: 500px;
//       height: 500px;
//     }
    