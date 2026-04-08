import React, { useState } from "react";
import { 
  BookOpen, 
  ExternalLink, 
  Users, 
  Clock,
  ChevronDown,
  ChevronUp,
  FileText, 
  Mic, 
  Presentation
} from "lucide-react";

// Extracted Card Component to handle individual expand/collapse state
function AbstractCard({ abstract }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // FIX 1: Changed 'h-full' to 'h-fit' so the card only takes up the space it needs
    <div className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-fit">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
            {abstract.id}
          </span>
          <span className="text-xs font-medium bg-secondary text-secondary-foreground border border-border px-3 py-1 rounded-full">
            {abstract.type}
          </span>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-4 leading-snug group-hover:text-primary transition-colors">
        {abstract.title}
      </h3>
      
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
        <Users size={16} className="text-primary shrink-0" />
        <span className="font-medium">{abstract.authors}</span>
      </div>

      {/* FIX 2: Removed 'flex-grow' to stop it from pushing the footer away */}
      <div>
        <p className={`text-justify text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
          {abstract.abstract}
        </p>
      </div>

    {/* Toggle Button */}
    <div className="mt-6 pt-4 border-t border-border flex items-center justify-start">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer text-sm font-semibold text-primary flex items-center gap-1.5 hover:text-primary/80 transition-colors bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-lg"
      >
        {isExpanded ? (
          <>Show Less <ChevronUp size={16} /></>
        ) : (
          <>Read Full Abstract <ChevronDown size={16} /></>
        )}
      </button>
    </div>
    </div>
  );
}

export function BookOfAbstract() {
  const [activeSession, setActiveSession] = useState("session1");

  // TEMPLATE STRUCTURE: Fill your abstracts in the respective arrays below
  const conferenceData = {
    session1: {
      id: "session1",
      title: "Parallel Session 1",
      time: "09:00 AM - 12:00 PM",
      subjects: [
        {
          category: "Innovation and Technology",
          abstracts: [
            {
              id: "IAT-001",
              title: "Development of a Fusion-Sensor System for Real-Time Muscle Fatigue Detection in the Biceps Brachii During Dynamic Curls Using Surface Electromyography and Accelerometry",
              authors: "Giovanni G. Galvez, Jilmark Jade M. Buhian",
              type: "Oral Presentation",
              abstract: "Muscle fatigue decreases motored functions due to dynamic and repeated contractions, especially during exercise of athletes and gym goers. Despite technological advances, the systematic determination of muscle fatigue is a challenge burdened with capturing both mechanical and electrical signs. It requires subject-specific calibration before use, limiting practical application. This study aimed to design, develop, and evaluate a potential multisensor system that analyzes real-time muscle fatigue identification in biceps brachii during dynamic curls. It integrates the utilization of two sensor-modalities: physiological sensing via surface electromyography (sEMG) and kinematic tracking via triaxial accelerometry. The calibration and validation of the MPU6050 accelerometer through manual goniometer reference accurately measured the elbow flexion from (0° - 135° ), demonstrating minimal deviations within ±2–5% acceptable biomechanical measurement tolerance. A subjectindependent normalization protocol was established using sEMG data collected from 100 participants, performing three maximal voluntary contraction (MVC) trials and one resting baseline measurement. It yielded an intraclass correlation coefficient of 0.622 which indicates moderate reliability across MVC measurements, alongside a coefficient of variation range from 21.33% - 26.65% and an EMG activation threshold of 0.138𝑚𝑉 to distinguish between muscle inactivity and active contraction. This integrated wearable system was evaluated through participation of 10 healthy adult gym goers performing dynamic curls until volitional failure. The binary classification of the system is validated through quantitative benchmark. Fatigue detection is triggered via two thresholds: physiological when root mean square (RMS) increases starting 0.185𝑚𝑉 and mean frequency drops at 81.9𝐻𝑧 and mechanical when peak flexion angle fails to reach the 135° threshold. The system peformance was further assessed through correlation of the participants’ ratings from the Borg CR-10 rate of perceived exertion (RPE) scale. Findings highlight the potential of wearable real-time sensing technologies that detects muscle fatigue through integration of electrophysiological and biomechanical indicators, contributing to safer resistance training practices, improved monitoring of athletic performance, and applications in sports science such as rehabilitation and injury prevention. Keywords: fusion-sensor, muscle fatigue, surface electromyography, accelerometry, maximal voluntary contraction, activation threshold.",
            },
            {
              id: "IAT-002",
              title: "Design and Development of a ZigBee-Enabled IoT Smart Aquaponics System with Solar-Grid Split Power for Real-Time Water Quality Monitoring, Automated Control, and Growth Performance of Red Tilapia and Lettuce",
              authors: "Francis Jerus B. Rabaca, Jubal U. Usman",
              type: "Oral Presentation",
              abstract: "Aquaponics is a sustainable food production system that integrates aquaculture and hydroponics in a closed-loop environment. However, many existing aquaponics systems face challenges such as manual monitoring, limited automation, dependence on Wi-Fi connectivity, and reliance on grid-based power supply. This study presents the design and development of a ZigBee-enabled, solar-powered Internet of Things (IoT) smart aquaponics system for real-time monitoring and automated control of water quality parameters to support the cultivation of Red Tilapia and lettuce. The proposed system integrates sensors for pH, total dissolved solids, ammonia detection via ammonia alert card with color sensor, water temperature, dissolved oxygen, ambient temperature and humidity, and water level. Sensor data are processed by a microcontroller that activates automated actuators for fish feeding, pH and nutrient dosing, aeration, misting, and water level regulation. A ZigBee wireless transceiver enables reliable communication in areas with limited internet access, while a local web-based interface provides real-time visualization, data logging, and system control. The system also incorporates a dual power-supply configuration where solar energy supports the monitoring and control components while the electrical grid powers high-load devices. This design aims to reduce manual labor and improve system reliability for small-scale and domestic aquaponics farming. Keywords: aquaponics, IoT, ZigBee, solar power, water quality monitoring",
            }, 
             {
              id: "IAT-003",
              title: "Noise-Augmented Training of a 1D CNN for Single-Lead ECG Classification on a Wearable-Class Microcomputer",
              authors: "Abdulaziz I. Abdukahil, Abdullah Dave S. Adjuran",
              type: "Oral Presentation",
              abstract: "Cardiac arrhythmias are associated with elevated risks of cardiovascular complications and require reliable identification to support appropriate clinical assessment. Recent machine learning–based electrocardiogram (ECG) classification methods have demonstrated promising performance under controlled conditions; however, models trained on clean clinical datasets may exhibit reduced reliability when applied to signals obtained from wearable devices, which are commonly affected by motion-related and physiological noise. This study proposes a noise-augmented training framework for a one-dimensional convolutional neural network (1D-CNN) designed to classify four cardiac rhythms—normal sinus rhythm, atrial fibrillation, premature ventricular complex, and left bundle branch block—from single-lead ECG recordings. ECG segments derived from the MIT-BIH Arrhythmia Database will be expanded using synthetic noise augmentation techniques that simulate baseline wander, electrode motion artifacts, muscle artifacts, and powerline interference in order to approximate practical acquisition conditions. The trained model will be optimized and converted to TensorFlow Lite format for deployment on a Raspberry Pi 4 Model B to evaluate feasibility for near real-time inference on wearable-class microcomputer hardware. System evaluation will include classification performance metrics, latency measurements, and agreement analysis with expert interpretation. The study aims to explore the feasibility of developing a robust yet computationally efficient arrhythmia classification system suitable for deployment in resource-constrained monitoring environments. Keywords: electrocardiogram, arrhythmia classification, noise augmentation, one-dimensional convolutional neural network, wearable systems.",
            },
            {
              id: "IAT-004",
              title: "Power-Efficient Water Quality Monitoring System: System Design, Integration, and Comparative Efficiency Analysis",
              authors: "Leff-Jazon T. Johnson, James Patrick I. Prianes",
              type: "Oral Presentation",
              abstract: "Water quality monitoring in remote river environments remains challenging due to limited communication infrastructure and the high energy requirements of conventional monitoring systems. This study presents the design and evaluation of a power-optimized water quality monitoring system capable of monitoring four environmental parameters relevant to river conditions while maintaining efficient energy utilization. The proposed system architecture integrates multiple water quality sensors with a microcontroller platform featuring built-in LoRa communication for long-range wireless data transmission. To achieve power efficiency, the system incorporates several low-power design techniques including duty cycling, microcontroller sleep modes, utilization of low-power sensors, and power gating of peripheral components to minimize energy consumption during inactive periods. LoRa communication was implemented as the primary transmission method due to its suitability for low-power, long-range wireless monitoring in remote environments. Through this architecture, the system periodically performs sensing, processing, wireless transmission, and transitions to low-power states to reduce overall energy usage. System functionality and performance were evaluated through controlled operational testing and field validation in a river environment to assess sensing stability, communication reliability, and overall system behavior under practical conditions. The results demonstrate that the developed system architecture provides a reliable and energy-efficient solution for remote water quality monitoring applications. Keywords: water quality monitoring, low-power embedded systems, LoRa communication, power optimization techniques, remote environmental monitoring."
            },
            {
              id: "IAT-005",
              title: "Raspberry Pi-Based Offline Smart Diagnostic Tool for Nitrogen, Phosphorus, and Potassium Deficiency Detection in Corn Leaves Using Visual Symptom Analysis",
              authors: "Leinon Krish M. Lauron, Johnmari Josef S. Lu",
              type: "Oral Presentation",
              abstract: "Corn (Zea mays L.) is an essential agricultural crop in the Philippines, yet its productivity is significantly affected by nutrient deficiencies, particularly nitrogen (N), phosphorus (P), and potassium (K). Traditional detection methods such as visual inspection are often subjective, while laboratory testing is costly and inaccessible to many smallholder farmers. This study develops a Raspberry Pi–based offline smart diagnostic tool that detects NPK deficiencies in corn leaves using image-based analysis and artificial intelligence. The system utilizes a MobileNetV2 convolutional neural network model trained on labeled corn leaf images to classify nutrient deficiencies based on visual color symptoms. Image preprocessing techniques, including RGB-to-HSV color space conversion and thresholding were applied to improve feature extraction and classification accuracy. The trained model was deployed on a Raspberry Pi platform using TensorFlow Lite to enable real-time, offline diagnosis suitable for field environments without internet connectivity. The prototype was evaluated through testing and expert validation from the local Office of Agriculture. Results indicate that the system can accurately identify nutrient deficiencies while maintaining efficient processing time. The study concludes that an offline AI-based diagnostic tool can provide a practical, low-cost solution for assisting farmers in early nutrient deficiency detection and improving crop management. Keywords: corn nutrient deficiency, MobileNetV2, Raspberry Pi, offline AI diagnostics, computer vision in agriculture",
            },
             {
              id: "IAT-006",
              title: "Myosug: Development of an sEMG-Based Muscle Activity and Fatigue Monitoring Device for the Lower Back in Stooping Tasks Associated with Rice Farming",
              authors: "Khrisna Alexandra C. Alih, Fairouz P. Hussin",
              type: "Oral Presentation",
              abstract: "Agriculture is a crucial sector in the Philippines but exposes farmers to significant physical strain that increases the risk of work-related musculoskeletal disorders (WMSDs), particularly lower back pain. Farming activities like planting, weeding, and harvesting often require prolonged stooping postures that place continuous mechanical stress on the erector spinae muscles, leading to neuromuscular fatigue and reduced spinal stability. Despite the prevalence of these conditions, fatigue assessment in agricultural settings usually relies on subjective reporting and visual observation, which are insufficient for detecting early physiological signs of muscle fatigue. This study proposes the development of Myosug, a portable monitoring device designed to detect lower back muscle fatigue using surface electromyography (sEMG). The primary objective of the research is to design and develop a wearable sEMG-based system capable of capturing and analyzing erector spinae muscle activity during stooping tasks associated with rice farming. The device integrates EMG sensors with a microcontroller-based platform to process muscle signals. Signal analysis focuses on fatigue-related indicators such as Root Mean Square (RMS) amplitude and Median Frequency (MDF) to identify changes in muscle performance during sustained activity. The methodology includes sensor calibration, system architecture design, electrode placement protocols, and beta testing through simulated stooping tasks. Normative baseline data will be collected from healthy participants to establish reference thresholds, followed by functional testing to evaluate the system’s signal quality and fatigue detection capability. By providing objective physiological feedback, the proposed system aims to support early detection of muscle fatigue and contribute to the prevention of musculoskeletal disorders among farmers."
            },
            {
              id: "IAT-007",
              title: "Evaluating the Influence of Knocking Force on the Accuracy of a Raspberry Pi–Powered Coconut Maturity Assessment System",
              authors: "Jhones B. Maang, Jaciz Humpbrei G. Pasatiempo",
              type: "Oral Presentation",
              abstract: "Coconut (Cocos nucifera L.) is a vital agricultural asset in tropical regions, yet its maturity assessment remains largely dependent on subjective manual tapping methods. These traditional techniques are prone to inconsistencies due to operator fatigue, environmental noise, and varying striking forces, leading to misclassifications that negatively impact post-harvest efficiency and product quality. While automated acoustic analysis using Fast Fourier Transform (FFT) and machine learning has shown promise, a significant research gap exists regarding how the magnitude of the applied knocking force influences acoustic signal quality and subsequent classification reliability. This study presents a Raspberry Pi-powered assessment system designed to systematically evaluate the influence of varying impact forces on coconut maturity detection. The developed prototype incorporates a programmable motorized knocking mechanism and a soundproof testing chamber to ensure consistent and high-fidelity acoustic capture. Using calibrated forces of 15N, 20N, and 30N, the system extracts key frequency-domain features—including peak frequency, spectral entropy, and amplitude—from the resonant response of the fruit. These features are then utilized by a Random Forest machine learning classifier to categorize coconuts into premature (malauhog), mature (malakanin), and overmature (malakatad) stages. The system's performance is rigorously evaluated using metrics such as accuracy, precision, and F1-score, with a target success rate of at least 90%. By analyzing the relationship between mechanical excitation parameters and acoustic response, this research aims to identify the optimal knocking force for maximizing feature separability and classification reliability. Ultimately, the development of this portable, force-calibrated platform enhances the objectivity and field applicability of non-destructive testing, contributing to the broader modernization and efficiency of the coconut industry."
            }
            ],
        },
    
      ],
    },
    session2: {
      id: "session2",
      title: "Parallel Session 2",
      time: "01:00 PM - 04:00 PM",
      subjects: [
            {
          category: "Theories and Algorithms",
          abstracts: [
            {
              id: "TAA-001",
              title: "Dengue Forecasting Using Arima and Random Forest Model on Weekly Cases in Zamboanga City Barangay",
              authors: "Ylman Nayr A. Galvez, Andrae G. Manguilimotan",
              type: "Oral Presentation",
              abstract: "Dengue fever, also known as break-bone fever, is a viral infection common in tropical areas like the Philippines, and prevention through awareness and preparedness is key to controlling its spread. This study forecasts weekly dengue cases in Zamboanga City and its barangays using ARIMA and a hybrid ARIMA–Random Forest model, evaluated through Mean Absolute Error (MAE), Symmetric Mean Absolute Percentage Error (SMAPE), and Root Mean Square Error (RMSE). Weekly case data were sourced from the City and Regional Epidemiological Surveillance Units, using two datasets: one from 2019 to week 34 of 2024 (294 weeks), and another from 2020 to week 34 of 2024 (242 weeks), each split 80% for training and 20% for testing. For city-level forecasts, ARIMA performed better in the short term, especially with the 2020 dataset, while the hybrid model showed stronger long-term performance when trained on the 2019 dataset. Similar trends appeared at the barangay level, where the hybrid model benefited from longer training data, and ARIMA performed better with shorter, more recent data. These results highlight the importance of dataset length in model accuracy and suggest that longer historical data can enhance hybrid model forecasts. Incorporating external variables is also recommended to capture sudden changes in dengue trends, improving reliability. The findings aim to support the Department of Health Region 9 and the Zamboanga City Health Office in strengthening their response to dengue outbreaks.",
            },
          ],
        },
        {
          category: "Urban Infrastructure and Construction Management",
          abstracts: [
            {
              id: "UICM-001",
              title: "Development of Delay Analysis and Control System (DACS) for FILPRO Construction Projects",
              authors: "Muhaimin N. Estino, Chester Paul D. Palacao, Victor B. Suarez Jr., Irish Ellaine B. Tubil",
              type: "Oral Presentation",
              abstract: "Construction project delays remain a persistent challenge in the Philippine building industry, with over 78% of projects experiencing significant schedule overruns. Small to medium-sized construction firms face particular difficulty implementing proactive delay management due to limited access to sophisticated forecasting tools and constrained technical resources. Existing project management practices commonly rely on the Critical Path Method (CPM) and Earned Value Management (EVM), which track schedule deviations but lack integrated mechanisms for predicting activity-level delays based on performance trends and causal factors (Bosch-Rekveldt et al., 2023). This study presents the development of the Delay Analysis and Control System (DACS) for FILPRO Construction Projects, a framework designed to analyze delay causes, predict schedule deviations, and support mitigation planning. The system integrates Relative Importance Index (RII), Pareto Analysis, Earned Value Analysis, and the Dependency Impact Factor (DIF) to quantify delay severity, identify dominant causes of delay, and evaluate activity dependencies within construction schedules. Delay prediction is generated using a Multiple Linear Regression model with Dependency Propagation (MLR-DP), incorporating schedule variance, delay cause severity, dependency impact, and performance trajectory as predictive variables. The model was developed using activity-level data from six FILPRO construction projects in Zamboanga City, comprising 46 observations. A deterministic modeling approach was adopted to ensure interpretability and feasibility for small datasets and non-technical decision-makers (Koulinas et al., 2020). The model targets a predictive accuracy of 70-75% (R²), comparable to existing delay prediction models reported in the literature (Almahli & Khraisat, 2025). Implemented through an Excel VBA-based platform, the system generates delay forecasts and mitigation recommendations within seconds during bi-weekly project reviews. The findings demonstrate that integrating delay severity analysis, performance monitoring, and dependency propagation enables practical activity-level delay prediction while remaining accessible to resource-constrained construction firms in the Philippine construction industry.",
            },
             {
              id: "UICM-002",
              title: "Structural Analysis and Design of a Community Evacuation Facility in Tumaga, Zamboanga City for Disaster Response and Recovery",
              authors: "Carlo Jose G. Faustino, Aljanna L. Larubis, Joan S. Sahali, Earl Justin T. Vengado",
              type: "Oral Presentation",
              abstract: "Evacuation remains one of the most common disaster response measures used in the Philippines to protect communities exposed to hazards such as flooding and earthquakes. During disasters, however, evacuees are typically accommodated in facilities such as schools and covered courts that are not originally designed as evacuation facilities. This situation is evident in Barangay Tumaga in Zamboanga City, with a population of more than 33,000 residents located along the Tumaga River. Flooding has repeatedly displaced residents in the barangay during several hazard events, including the 2023 shear line rains that displaced 599 families, Typhoon Paeng, which displaced 482 families, and 110 families during Typhoon Ompong (ZCDRRMO, 2026). These recurring evacuations highlight the need for a permanent evacuation facility in the community. This study addressed Barangay Tumaga’s need for a dedicated evacuation facility through the conceptual and technical design of a permanent evacuation center. The study first determined an appropriate design capacity for the proposed facility using available evacuation records and applicable shelter planning standards. These parameters established the spatial requirements for the evacuation center and served as the basis for the conceptual layout planning and structural design of the facility. The design process considered applicable provisions of the National Structural Code of the Philippines (NSCP) together with evacuation center planning guidelines from the Department of Public Works and Highways (DPWH), local provisions, and standards informed by the Sphere Guidelines, which provide internationally recognized minimum standards for humanitarian shelter and emergency living conditions. The study also evaluated the suitability of an identified project site located along Sun Street in Barangay Tumaga, Zamboanga City. Preliminary findings indicated that a two-storey evacuation center was required to safely accommodate a projected capacity of approximately 400 individuals, based on evacuation records from the Zamboanga City Disaster Risk Reduction and Management Office (ZCDRRMO). ",
            },
          ],
        },
        {
          category: "Applied Science",
          abstracts: [
            {
              id: "APS-001",
              title: "Developing a Polyethylene Terephthalate (Pet) Bottle Powder-Based Method and its Potential for Dna Extraction",
              authors: "Aiza A. Saradi",
              type: "Oral Presentation",
              abstract: "This study developed a polyethylene terephthalate (PET) bottle powder-based method and examined its potential as a low-cost and sustainable alternative for DNA extraction under resource-limited conditions. Specifically, it aimed to identify PET bottles containing silicon dioxide (SiO₂), determine their SiO₂ content through gravimetric analysis, and test their potential for DNA extraction using banana, tomato, and papaya samples. A phase-based experimental design was employed using locally available PET bottles from C2, Real Leaf, and Coca-Cola, which were collected, washed, cut, mechanically ground, sieved, and used in gravimetric and DNA extraction trials. Results showed that all three PET bottle types contained measurable inorganic residue consistent with silica-bearing components, with C2 having the highest SiO₂ content (21.66%), followed by Real Leaf (20.36%) and Coca-Cola (11.36%). In the DNA precipitation trials, banana produced the most visible and consistent precipitates across PET types, with Banana + Real Leaf rated Excellent and Banana + Coca-Cola and Banana + C2 rated Very Good. Tomato showed workable but less robust performance, while papaya exhibited the weakest and most variable results, particularly with CocaCola PET. Statistical analysis further showed that fruit type significantly affected precipitation height, whereas PET type differences were only marginally nonsignificant. The findings suggest that discarded PET bottles can serve as a practical preliminary silica source for instructional DNA extraction, although further optimization and instrumental validation are recommended.",
            },
             {
              id: "APS-002",
              title: "Quantification and Characterization of Microplastics in Commercial Perna Viridis (Tahong) and Magallana Bilineata (Talabang Tsinelas) from the Bivalve Supply in Zamboanga City, Philippines: A Preliminary Investigation",
              authors: "Hanah Firdous T. Ahaja, Realle A. Ramirez",
              type: "Oral Presentation",
              abstract: "Microplastics (MPs), defined as plastic fragments, fibers, beads, pellets, films, and foams ranging from 0.1 μm to 5 mm, form via degradation of plastic debris in aquatic ecosystems (Mercogliano et al., 2021). With the Philippines ranking as the third-largest contributor of plastic waste globally, concerns over seafood-mediated human exposure are increasing. Bivalves such as the slipper-cupped oyster (Magallana bilineata) and green mussel (Perna viridis) are particularly vulnerable to MP ingestion due to their filter-feeding behavior, posing risks of bioaccumulation and direct human exposure in regions where these species are dietary staples. Despite Zamboanga City’s status as a vital aquaculture hub, no published studies currently address MP levels in the city’s commercial bivalves. This study quantified MP abundance and characterized morphology (size, shape, color) in M. bilineata and P. viridis obtained from two  major markets in Zamboanga City, Magay Public Market and Aderes Flea Market. A total of 300 individuals (50 per species per trial × 3 trials) were dissected, pooled into composites, and digested in 10% KOH (60°C for 6 h, then room temperature for 48 h). MPs were extracted via wet sieving through a three-layer stacked sieve system and fractionated into large (1–5 mm), medium (355–1,000 μm), and small (125–355 μm) sizes. Particles were enumerated and characterized using stereomicroscopy, with plastic identity confirmed through the hot needle test.",
            },
             {
              id: "APS-003",
              title: "In Silico Modeling of the Brownian Dynamics Between Phytochemical-Loaded Pectin Nanoparticles from Sonneratia Alba (Pagatpat) and Tumor Extracellular Matrix",
              authors: "Herlyn Kate P. Aizon, Franchesca V. Bernardo, Daniel Angelito G. Hernandez",
              type: "Oral Presentation",
              abstract: "Nanoparticle-based drug delivery systems have emerged as a promising strategy for improving the effectiveness of cancer therapeutics. However, the tumor extracellular matrix (ECM) presents a major barrier to nanoparticle penetration due to its dense and complex structure. Understanding how nanoparticles interact with the ECM at the molecular level is therefore essential for optimizing nanocarrier design and improving drug delivery efficiency. This study investigates the interaction between phytochemical-loaded pectin nanoparticles derived from Sonneratia alba (Pagatpat) and the tumor extracellular matrix using an in silico molecular dynamics approach. Computational modeling is employed to construct phytochemical-loaded pectin nanoparticle systems and ECM models under physiological conditions. Molecular dynamics simulations are performed to evaluate structural stability, interaction dynamics, and diffusion behavior within the ECM environment. Structural stability is assessed using root mean square deviation (RMSD), radius of gyration (Rg), and root mean square fluctuation (RMSF). Interaction dynamics are analyzed through hydrogen bond formation and radial distribution function (RDF), while nanoparticle transport behavior is evaluated using diffusion coefficient calculations and potential of mean force analysis. Simulations are conducted under an NPT ensemble at 303.15 K to approximate physiological conditions. The study provides molecular-level insights into the stability, interaction patterns, and transport behavior of phytochemical-loaded pectin nanoparticles within the tumor ECM. Findings from this research contribute to understanding how natural polymer-based nanocarriers behave in complex tumor environments and may support the design of more effective nanoparticle-based drug delivery systems. Additionally, the study demonstrates the value of in silico modeling as a cost-efficient and high-resolution approach for predicting nanoparticle behavior prior to experimental validation. Keywords: Pectin nanoparticles, Sonneratia alba, tumor extracellular matrix, molecular dynamics, Brownian dynamics",
            },
             {
              id: "APS-004",
              title: "Integrating SAMR–Based Self–Paced Learning Module In Teaching Radiation Damage In Biological Materials",
              authors: "Daniel Angelito G. Hernandez, Merlita C. Garcia",
              type: "Oral Presentation",
              abstract: "Understanding modern physics topics such as radiation damage and transport using Monte Carlo calculations requires an elevated level of abstraction. Easing the teaching and learning process in modern physics, virtual laboratories, project–based learning activities, and simulation–based learning activities are used to promote active engagement together with technology integration in the 21st century classroom. Hence, this study used Zimmerman’s self–regulation and Puentadura’s SAMR model to develop a self–paced learning module in teaching radiation damage in biological materials as learning material to determine the level of learning transfer as evidence of self–regulated learning in a university modern physics–biophysics course. A one–group pretest–posttest quasi–experimental quantitative design was employed considering 26 BS Biology students through purposive sampling, where pretest and posttest were administered before and after using the developed self–paced learning module to determine the change in level of learning transfer, which concluded by a case study on radiation damage of heavy water phantoms (H+) and heavy helium He+ ions on various biological materials using Monte Carlo simulations. Study results revealed that there is a moderate Hake’s gain of 0.392 ±0.4325 and difference in the learning transfer between the pretest and posttest with a normality mean score difference of 10.42 ±4.23. Using a paired sample t–test, it showed that there is a significant difference between the scores with p = <0.001 indicating that the self–paced learning module anchored in self–regulation and SAMR models enhances learning experiences allows the development of critical thinking and support student learning. Keywords: Self–regulation, SAMR, ICT integration, radiation, Monte Carlo",
            },
       
          ],
        },
      ],
    },

  posterSession: {
      id: "posterSession",
      title: "Poster Presentations",
      subjects: [
        {
          category: "All Departments",
          abstracts: [
            {
              id: "POSTER-001",
              title: "The Multiplication Table as a Framework for Discovering Sums of Powers and Faulhaber’s Formula",
              authors: "Fatima Edzra A. Salasa",
              type: "Poster Presentation",
              abstract: "The multiplication table is traditionally introduced in elementary mathematics as a fundamental tool for memorizing multiplication facts and performing arithmetic computations. Despite its simplicity, the multiplication table embodies rich structural patterns that reveal deeper mathematical relationships among numbers. This seminar exposition examines the mathematical insights presented in Amir H. Asghari’s article “Wonders of the Multiplication Table” published in The Mathematics Enthusiast (2025). The study aims to analyze how patterns embedded in the multiplication table can lead to the discovery of important formulas for the sums of powers of natural numbers. Beginning with the additive interpretation of multiplication, the exposition explores how the table visually and structurally reveals formulas for the sums of integers, squares, and cubes, and how these patterns extend to higher powers. Furthermore, the paper discusses how these numerical patterns naturally connect to significant mathematical concepts such as triangular numbers, Faulhaber’s formula, and Bernoulli numbers. Through an expository analysis of the article, the study demonstrates how a simple arithmetic structure can serve as a gateway to advanced mathematical reasoning involving algebraic identities and combinatorial structures. In addition, the exposition highlights the pedagogical implications of investigating patterns within the multiplication table. By emphasizing visual and structural reasoning, the multiplication table can be used as an effective instructional tool that bridges elementary arithmetic with higher mathematical thinking. Ultimately, this study illustrates that the multiplication table is not merely a computational aid but a powerful framework for mathematical exploration and conceptual understanding. Keywords: multiplication table, sums of powers, Faulhaber’s formula, Bernoulli numbers, triangular numbers, mathematical patterns, relational understanding, mathematics education.",
            },
               {
              id: "POSTER-002",
              title: "A Teacher’s Guide on the Use of Natural Acid-Base Indicators in Determining the Acidity and Basicity (pH) of Common Household Materials",
              authors: "Knesa N. Raviz",
              type: "Poster Presentation",
              abstract: "Common synthetic pH indicators, while effective, pose safety risks and are costly, limiting their accessibility in high school laboratories. Natural plant extracts from begonia Begonia obliqua L.), plumeria (Plumeria rubra), and turmeric (Curcuma longa) were evaluated for their effectiveness as pH paper indicators through a series of testing involving buffer solutions with known pH values and common household products. Color-changing compounds were extracted from the plant using commercial acetone as solvent, followed by testing of color change across a pH range of 2 to 12. The pH papers were prepared by soaking the filter paper in these extracts and drying them, followed by testing with acidic and basic household products: lemon juice, vinegar, detergent, and antacid solutions. The pH papers demonstrated distinct and reliable color changes correlating to acidity and basicity for each extract: begonia extract exhibited a red color in acidic solutions and blue in basic solutions; turmeric showed a yellow color in acidic and red in basic conditions; while plumeria displayed colorless in acidic and yellow in basic solutions. The natural plant extracts are effective pH paper indicators with color changes readily visible and observable. Their safety, low cost, and local availability make them viable alternatives for educational purposes, especially in high school laboratories. It also has the benefit of integrating green chemistry principles in STEM education by providing sustainable, low-toxicity materials. The final output includes a teacher’s guide and laboratory procedure, including rubrics for grading to facilitate the adoption of these natural pH paper indicators in high school classrooms and laboratories, promoting practical, eco-friendly chemistry education aligned with DepEd curriculum requirements on acids and bases. Keywords: pH indicator, pH paper, green chemistry",
            },
               {
              id: "POSTER-003",
              title: "PDRRMO-iOPS: A Web-and-Mobile Disaster Operations and Reporting System for Basilan PDRRMO",
              authors: "Claire O. Carpio",
              type: "Poster Presentation",
              abstract: "Effective Disaster Risk Reduction and Management (DRRM) requires timely access to reliable information, coordinated communication, and systematic reporting. Many local offices still rely on fragmented manual processes, such as handwritten logs, phone calls, and social media messages, resulting in delayed reporting, incomplete documentation, and limited situational awareness, especially during multi-incident or large-scale emergencies. This study presents BASILAN i-OPERATIONS, a web-and-mobile disaster operations and reporting system designed to digitalize core workflows of the Basilan Provincial DRRM Office, including incident reporting, dispatch coordination, referral and transport documentation, logistics monitoring, and automated Situation Report generation. The system follows a layered architecture with client interfaces, application modules, and a centralized database, featuring incident management, unit tracking, GIS-based visualization, automated reporting, and SMS-based alerts. It supports multiple users, including provincial and municipal DRRM personnel, health facilities, responders, and authorized stakeholders. Prototype evaluation will use simulation-based disaster scenarios and user feedback to assess usability and operational relevance. The system is expected to enhance efficiency, situational awareness, coordination, and decision-making, demonstrating how localized digital platforms can strengthen disaster governance and operational efficiency in resource-constrained, geographically dispersed areas such as Basilan Province. Keywords: Disaster Risk Reduction, Emergency Management, Information System, Digital Reporting, Situational Awareness, Basilan Province, PDRRMO, Mobile Application",
            },
               {
              id: "POSTER-004",
              title: "Analysis and Design of Multi-level Parking Facility at La Purisima Street, Zamboanga City",
              authors: "Mary Grace D. Castolo, Shella Mae M. Delos Reyes, Ameer Rayyan S. Hamsain, Margareth Jannah L. Quiling",
              type: "Poster Presentation",
              abstract: "In recent decades, the rapid increase in population has led to the increase of the need to reach certain destinations to access services, may it be essential or for leisure. This in turn has drastically provoked the city’s urban landscape, especially at the central business districts, to grow and change to meet the demands of the people; and with the absences of an efficient transportation system that provides better accessibility and policies that promote moving more people, people resort to private vehicle dependency which alternately caused severe road deterioration and ultimately, resulted to traffic congestion. The large number of vehicle ownership and use are evidently present in developing countries, and Zamboanga City is not an exception. One of the biggest pitfalls of this condition is the pervasive demand for parking. Initial findings from parking and survey data at the central business district of Zamboanga City, which were employed in this study, indicate that there is a supply-demand deficit. Driven by this critical shortage, this study evaluated the technical and financial feasibility of a proposed multi-level parking facility. It aimed to determine peak-hour demand, calculate the space deficit, and evaluate the facility’s financial feasibility through its Payback Period (PBP) and Return on Investment (ROI). A 500-meter diameter study area on the parking lot of Birth Care near the junction of Governor Alvarez Avenue and La Purisima Street was established to focus on the high-intensity demand zone within the 250-meter walking distance of the primary parking generators, such as schools, hospitals, government institutions, etc.. A probability tree approach within this zone determined purposive sample sizes for patrol (turnover and occupancy) and willingness-to-pay (WTP) surveys. The proposed facility, which is a composite structure, was analyzed using computer-aided design, with financial viability evaluated using PBP and ROI. Preliminary results of the study indicate that the turnover is critical in the early morning (6:00 – 9:00 AM), with mostly students and workers occupying parking spaces for 4 to 7.5 hours. WTP surveys indicate preferred rates (daily: ₱5 – ₱25 for motorcycles, ₱26 – ₱50 for cars; hourly: ₱5 – ₱10 for motorcyles, ₱11 – ₱20 for cars). Based on these figures, the project presumes a shortened PBP due to the high volume of long-term occupancy rates. The study recommends designing secure, high-density motorcycle zones and prioritizing lower-level bays for short-term, high-turnover parking. Keywords: Parking Demand Analysis, Feasibility Study, Composite Structural System, Willingness-to-Pay, Zamboanga City",
            },
               {
              id: "POSTER-005",
              title: "Construction Site Safety Compliance through Barcode-Assisted PPE Monitoring and Database Management System",
              authors: "Ma. Antoinette S. Duruin, Alfie J. Iribani II, Marc Adrianne M. Serna, Rochelle D. Tada, Marcc Benjil A. Taub",
              type: "Poster Presentation",
              abstract: "Construction sites remain among the most hazardous workplaces in the Philippines, and PPE non-compliance continues to undermine worker safety not because regulations are absent, but because monitoring systems fail to document it. Despite the mandates of Republic Act No. 11058, the Occupational Safety and Health Standards, and DOLE Department Order No. 13, survey results from Abdurauf Sawadjaan Engineering Consultancy (ASEC) in Zamboanga City reveal that 68% of respondents encountered improper PPE use, 32% reported workers not wearing required PPE, and 80% attributed non-compliance to deadline pressure. Yet despite daily inspections across multiple active project sites, no timestamped, individually verified, or centralized compliance records exist—leaving supervisory decisions dependent on memory, verbal corrections, and incomplete checklists that cannot be traced or audited. This capstone study developed and evaluated a Barcode-Assisted PPE Monitoring and Database Management System using Microsoft Excel and Visual Basic for Applications (VBA). The system assigns unique barcodes to registered workers, which are affixed to their hard hats and scanned during inspections using a Bluetooth barcode scanner. Each scan automatically generates timestamped compliance entries, logs violations with color-coded severity indicators, computes compliance rates, and produces automated summary dashboards—all functioning fully offline to suit field conditions with limited connectivity. The system is evaluated against ASEC’s manual baseline through Mixed-Methods Comparative Analysis, employing a Paired T-Test for time efficiency, Percentage Error Rate for data accuracy, binary checklist analysis for record completeness, and TAM-based Thematic Analysis for user acceptance. Baseline assessment findings confirm that site engineers managed multiple sites simultaneously, inspections were missed two to three times per week, and manual reports were submitted without inspector identification or supporting logs. The findings demonstrate that ASEC’s monitoring gaps stem not from lack of safety enforcement, but from the absence of a standardized and traceable documentation workflow. Implemented through an Excel VBA-based platform, the system transforms verbal, memory-dependent supervision into structured, auditable, and DOLE-compliant safety records — remaining accessible to resource-constrained construction firms across the Philippine construction industry. ",
            },
               {
              id: "POSTER-006",
              title: "Using Convolutional Neural Networks to Detect Early Symptoms of Banana Bunchy Top Disease in Banana Cultivar “Lakatan” Trees",
              authors: "Cielo Arabella S. Canda, Rebecca Marie C. Tiu",
              type: "Poster Presentation",
              abstract: "Banana Bunchy Top Disease (BBTD) is one of the major diseases affecting Lakatan banana production in the Philippines. Early symptoms such as Morse-code streaks, J-hook deformations, and leaf bunching can be difficult to detect through visual inspection alone, while laboratory testing is often costly and impractical for field use. This study developed a real-time, offline disease detection system using YOLOv8 and Raspberry Pi 5 to identify visible symptoms of BBTD from banana leaf images. The study used a three-pipeline approach involving object detection, COCO segmentation, and instance segmentation. Public datasets and collected field images of healthy and infected Lakatan banana leaves were used for training and testing. The system was deployed on a Raspberry Pi 5 with a webcam and OLED display for on-device image capture, processing, and result display. Model performance was evaluated using standard metrics such as accuracy, precision, recall, and F1-score. Results showed that deploying three different models was feasible, although the accuracy at each stage was heavily reliant on the dataset used for training. The study found that YOLOv8 can serve as the basis of an offline detection system to assist BBTD monitoring in Lakatan bananas.",
            },
      
               {
              id: "POSTER-007",
              title: "Development of a Computer Vision-Based Machine Learning Model for Papaya Ripeness Stage Classification Utilizing Raspberry Pi 4",
              authors: "Danielle Franchette A. Cruz, Jehan Alfa Mae H. Uy",
              type: "Poster Presentation",
              abstract: "Papaya (Carica papaya L.) is a widely consumed tropical fruit, but determining its ripeness can be difficult because it is commonly based on manual inspection of color, firmness, and aroma. These traditional methods are subjective and often inconsistent, which can lead to incorrect ripeness classification, early harvesting, or fruits becoming overripe before reaching consumers. As a result, postharvest losses and quality inconsistencies may occur across the supply chain. With the advancement of artificial intelligence and computer vision, automated and non-destructive approaches can now be explored to assist in fruit ripeness assessment. This study proposes the development of a computer vision–based machine learning model for papaya ripeness stage classification using the YOLOv8 deep learning architecture deployed on a Raspberry Pi 4. The system is designed to capture images of papayas using a camera and analyze visual features such as color and texture to determine the ripeness stage. Papayas will be classified into four categories: unripe, mid-ripe, ripe, and overripe. A dataset of papaya images will be collected and annotated, and image augmentation techniques will be applied to improve the model’s ability to recognize fruits under varying lighting conditions and viewing angles. The trained YOLOv8 model will then be integrated with a Raspberry Pi 4 to enable real-time image processing and classification in an offline environment. The LCD will also be developed to display detection results and ripeness labels for user interaction. Through this approach, the study aims to design a low-cost, portable, and non-destructive system that can assist farmers, traders, and researchers in evaluating papaya ripeness more consistently and efficiently.",
            },
               {
              id: "POSTER-008",
              title: "IoT-Based Socket System with Power Control, Overload Protection, and Energy Forecasting for Electronics Laboratory Energy Management",
              authors: "Mark Hailey M. Marasigan, Tristan Jay J. Lim",
              type: "Poster Presentation",
              abstract: "University laboratories consume significantly higher electrical energy than typical commercial spaces because of the diverse, specialized, and power-intensive equipment used in daily academic activities. However, many existing energy monitoring systems remain limited by unreliable connectivity, the absence of automated appliance identification, and the lack of predictive energy analysis, reducing their effectiveness in managing laboratory energy consumption. This study proposes the development of an Internet of Things (IoT)-based smart socket system designed to improve energy monitoring, appliance identification, and forecasting in university laboratory environments. The proposed system integrates a microcontroller with an energy monitoring module to measure voltage, current, power, frequency, and energy consumption in real time. Dual communication technologies using Wi-Fi and GSM are implemented to ensure continuous monitoring and data transmission even during network disruptions. In addition, machine learning techniques are incorporated to automatically classify connected laboratory appliances based on their electrical load signatures and to forecast monthly energy consumption and operational costs. The system also includes relay-based power control and local data storage for offline data logging to maintain system functionality when internet connectivity is unavailable. The developed prototype will be tested in a laboratory setting to evaluate measurement accuracy, communication reliability, and the performance of the appliance classification and forecasting models. The proposed system is expected to effectively monitor energy usage, identify connected devices, and provide predictive insights into energy consumption patterns. Ultimately, the system aims to provide a practical, reliable, and intelligent solution for improving energy management, reducing operational costs, and supporting sustainable energy practices in university laboratory environments. Keywords: IoT, smart socket, energy monitoring, appliance classification, energy forecasting, laboratory energy management.",
            },
               {
              id: "POSTER-009",
              title: "EFA Logistics: An Automated Package Management System Using Optical Character Recognition (OCR) for EFA Enterprises Zamboanga City",
              authors: "Ramon A. Reyes III, Jay-ar S. Lauddin",
              type: "Poster Presentation",
              abstract: "The efficiency of logistics operations is critical for supply chain management, yet many local service providers continue to rely on outdated, manual processes. EFA Enterprises, a logistics provider based in Zamboanga City, faces significant operational inefficiencies due to manual package management, text-based customer updates, and unoptimized route planning. Currently, couriers struggle with manually encoding complex 7 to 14-digit waybill numbers, a practice that leads to tracking delays, frequent miscommunication, and a high susceptibility to human error during peak periods. To address these operational bottlenecks, this study aims to develop an Automated Package Management System integrated with Optical Character Recognition (OCR) technology. The proposed solution eliminates manual data entry by automatically extracting and processing waybill numbers through a dedicated mobile scanning module. Furthermore, it implements automated, real-time status updates for both senders and receivers, effectively replacing manual text messaging and reducing customer follow-ups. To further streamline daily operations, the system incorporates a First-In, First-Out (FIFO) sorting mechanism for package coordinators and integrates the Google Maps API for real-time delivery route navigation. Designed exclusively for EFA Enterprises, this system focuses on internal operational optimization. By automating waybill recognition and communication, this study will significantly reduce employee workload, minimize encoding errors, and optimize fuel and travel time. Ultimately, the system provides a scalable digital model that enhances customer satisfaction and operational efficiency for small to medium-sized logistics enterprises.",
            },
               {
              id: "POSTER-010",
              title: "Synergistic Molluscicidal Potential of Annona Squamosa (Atis) Leaf Extracts and Allium Sativum (Garlic) Clove Extracts against Pomacea Canaliculata (Golden Apple Snail)",
              authors: "Amani A. Halipa, Fatima A. Halipa",
              type: "Poster Presentation",
              abstract: "The golden apple snail (Pomacea canaliculata) is considered one of the most destructive pests affecting rice production in the Philippines, resulting in significant crop losses and influencing farmers to rely heavily on synthetic molluscicides. However, the continuous use of these chemicals poses environmental and health risks, underscoring the need for safer and sustainable alternatives. The main purpose of this study is to evaluate the molluscicidal potential of Annona squamosa (Atis) leaf extract and Allium sativum (Garlic) cloves extract against Pomacea canaliculata (Golden Apple Snail) and to determine whether their combination produces a synergistic effect. A quantitative experimental design using a completely randomized design will be employed under controlled laboratory conditions. Golden apple snails will be exposed to four concentrations (25%, 50%, 75%, and 100%) of each plant extract through a snail immersion bioassay, with mortality recorded at specified time intervals. The most effective concentrations will then be combined in ratios of 1:1, 2:1, and 1:2 to evaluate synergistic molluscicidal activity and compared with a commercial molluscicide (Brodan). The findings of this study are expected to contribute to the development of eco-friendly, plant-based molluscicides that can help reduce dependence on synthetic pesticides while supporting sustainable rice farming and environmental protection. Keywords: Botanical molluscicide, Annona squamosa, Allium sativum, golden apple snail, Snail Immersion Bioassay",
            },
               {
              id: "POSTER-011",
              title: "Synthesis And Hemostatic Potential Of Copper Nanoparticles Derived From Achuete (Bixa Orellana) Seed Covering Extract",
              authors: "Gwyneth B. Landiza, Raine B. Yumol, Daniel Angelito G. Hernandez",
              type: "Poster Presentation",
              abstract: "Hemostasis is an essential physiological process that prevents excessive blood loss following vascular injury. Various commercial hemostatic agents are available, yet many present limitations related to cost, accessibility, and potential adverse effects. The increasing interest in plant–derived alternatives may serve as safe, effective, and affordable hemostatic materials along with the advances in nanotechnology showing nanoparticle–based systems enhance biological activity and stability of plant–derived compounds. This study aims to evaluate the hemostatic potential of copper nanoparticles derived from Bixa orellana (achuete) seed covering extract using blood coagulation and diffusion parameters. Using true–experimental research design via in vitro testing, blood coagulation, and diffusion tests using pig’s blood are used to determine primary and secondary hemostasis, quantifying the hemostatic potential of B. orellana derived copper nanoparticles. Hence, preliminary phytochemical detection using UV–Vis spectrophotometry showed highest absorbance peaks at 200 nm = 4.0 AU, indicating the presence of saponins, 26 nm = 4.0 AU, indicating alkaloids, and 395 nm = 3.95 AU, indicating flavonoids. The highest absorbance peaks indicates that the necessary phytochemicals to exhibit hemostasis are present in B. orellana extract. Furthermore, findings from this study provides insights into effectively design of novel drug delivery systems using nanotechnology and natural products. Keywords: Copper nanoparticles, Bixa orellana, hemostastic agent, phytochemicals, blood",
            },
               {
              id: "POSTER-012",
              title: "Exploring The Applications Of Simplex Noise In Procedural Open-World Biome Generation",
              authors: "Jan Ryan R. Simyunn, Anton John A. Orillineda",
              type: "Poster Presentation",
              abstract: "Perlin noise is the industry-standard noise algorithm utilized in procedural contentgeneration. Despite its popularity, it suffers from two primary technical limitations: O(2N)time complexity and significant visual artifacts. While Simplex noise, with its O(N)complexity and decreased visual artifacts, is theoretically superior, comprehensive benchmarks within integrated multi-variable pipelines remain limited. This research addresses these gaps by conducting a technical performance evaluation and exploration of Simplex noise within a procedural multi-variable biome generation pipeline. A Simplex noise plugin was developed for Godot v4.3 to facilitate a comparative analysis against Perlin noise in 3D procedural environments. Performance was benchmarked via initial generation time (ms) and real-time frame rates (FPS) across different configurations. Additionally, this study introduces a framework for evaluating the visual quality of textures by quantifying visual artifacts. Inspired by Short-Time Fourier Transform (STFT) principles, this methodology calculates the Anisotropy Index of the entire texture (Overall Anisotropy Evaluation) and for each segment of the texture(Divided Anisotropy Evaluation). This approach allows for the distinct quantification of rotational asymmetry and localized grid artifacts, respectively. Results indicate Simplex noise finding practical use in scenarios where better 2D scaling, real time performance, and less grid artifacting are valued, with Perlin noise benefiting from native engine integration in initial generation times. Ultimately, the results demonstrated Simplex noise being a suitable noise algorithm for the domain of procedural open-world biome generation, as well as a viable alternative to Perlin noise.",
            },
               {
              id: "POSTER-013",
              title: "A Web-Based Centralized Internship Management System For The Computer Science Department Of Ateneo De Zamboanga University",
              authors: "Christian Jed M. Duqueza, Jae Ann O. Alcala",
              type: "Poster Presentation",
              abstract: "Managing internship programs often involves multiple stakeholders, fragmented documentation, and manual coordination between students, faculty coordinators, and partner organizations. These challenges make it difficult to track internship applications, monitor student progress, manage evaluation records, and maintain consistent communication throughout the internship process. To address these issues, this study developed a web-based Internship Management System designed to streamline and centralize internship management for the Computer Science, Information Technology, and New Media and Computer Animation programs under the Computer Science Department of Ateneo de Zamboanga University. The system was developed using a structured software development process and implemented as a role-based web platform supporting five primary user types: administrator, coordinator, student, partner organization head, and supervisor. Key system modules include internship application management, weekly journal submission and grading, internship progress monitoring, certificate and evaluation submission, partner organization invitation and registration, supervisor account management, and Memorandum of Agreement (MOA) lifecycle management with version tracking. These integrated modules allow the system to automate previously manual processes and provide a centralized platform for managing internship-related records. System functionality was validated through alpha testing by developers and beta testing with actual end-users, including coordinators, students, and partner organization representatives. Evaluation results based on usability, interface design, content quality, and overall system performance show that the system is intuitive, well-organized, and effective in supporting internship processes. These findings confirm that the system serves as a reliable platform for managing and monitoring internship programs within the department.",
            },
              {
              id: "POSTER-014",
              title: "Preliminary Molecular Dynamics Simulation And Investigation On The Interaction Of Pectin Polymer Nanoparticle In Extracellular Matrix",
              authors: "Herlyn Kate P. Aizon, Franchesca V. Bernardo, Daniel Angelito G. Hernandez",
              type: "Poster Presentation",
              abstract: "Extracellular matrix (ECM) is a 3–dimensional network of molecular interaction between proteins, proteoglycans, and glycosaminoglycans which are found in tissues, which contributes to tumor development [1][2]. With the limitations of penetrating tumor–filled ECM environment, pectin shows a significant role in facilitating phytochemical diffusion based on its ability to absorb phytochemicals, which complements to its polysaccharide nature, comprising of basic units of 1, 4–linked α–D galacturonic acid [3][4]. This investigation aimed to model the interaction between pectin polymer as a nanoparticle and ECM environment, as a precursor to phytochemical diffusion in tumor–filled ECM environment using molecular dynamics simulations. This investigation employed in silico modeling, input files were built using CHARMM–GUI through protein data banks from PubChem and subsequently optimized using LAMMPS and Visual Molecular Dynamics (VMD) to assess the molecular stability and molecular interactions. Protein data banks of 1, 4–linked α–D galacturonic acid as building monomer of pectin polymer nanoparticle, and packed ECM comprising with collagen and hyaluronan were used and solvated in water to mimic its natural environment. Preliminary results shows that both modeled pectin polymer nanoparticle and ECM environment showed stable conditions for phytochemical diffusion based on the following parameters: root mean square displacement (RMSD) and fluctuation (RMSF), radius of gyration (Rg), radial pair distribution function, g (r), and hydrogen bonds [5]. Future procedures will employ phytochemical loading and Brownian diffusion modeling methods to mimic drug delivery systems from endothelial cells to the matrix. This approach offers an avenue to study optimal drug delivery and anti – cancer potential of phytochemical–loaded pectin nanoparticles. Keywords: Pectin, nanoparticle, extracellular matrix, phytochemical, molecular dynamics",
            },
          ],
        },
      ],
    }

  };

  const currentSessionData = conferenceData[activeSession];

  return (
    <div className="min-h-screen bg-background text-foreground pb-12">
      {/* Hero Section */}
      <div className="bg-secondary/50 border-b border-border pt-16 pb-12 px-4 mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <BookOpen className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Book of Abstracts
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Explore the cutting-edge research and presentations from the 2nd CSITE Research Colloquium.
          </p>
          
          {/* Google Drive Link Button */}
          <a 
            href="https://drive.google.com/your-link-here" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-medium shadow-lg shadow-primary/25"
          >
            Access Full Abstracts Repository
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
     {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto relative z-10">
          {[
            { label: "Total Abstracts", value: "28", highlight: true, icon: FileText },
            { label: "Oral Presentations", value: "14", icon: Mic },
            { label: "Poster Presentations", value: "14", icon: Presentation },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`group relative rounded-3xl p-8 text-center border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  stat.highlight 
                    ? "bg-gradient-to-br from-primary via-primary to-[#ff9856] text-white border-transparent shadow-primary/30 shadow-xl" 
                    : "bg-card border-border/60 shadow-lg hover:border-primary/40"
                }`}
              >
                {/* Decorative background glow for the highlighted card */}
                {stat.highlight && (
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                )}

                {/* Icon Container */}
                <div className={`mx-auto w-14 h-14 flex items-center justify-center rounded-2xl mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  stat.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  <Icon strokeWidth={2.5} size={28} />
                </div>
                
                {/* Numbers & Label */}
                <div className={`text-5xl font-extrabold mb-2 tracking-tight transition-colors ${!stat.highlight ? "text-foreground group-hover:text-primary" : ""}`}>
                  {stat.value}
                </div>
                <div className={`text-sm uppercase tracking-widest font-bold ${stat.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
   {/* Session Toggle Tabs */}
<div className="flex justify-center mb-12 px-4 w-full">
  {/* Added shadow-inner to the container to make it look like a recessed track, 
    making the buttons "pop" out more. 
  */}
  <div className="inline-flex flex-wrap items-center justify-center p-1.5 bg-secondary/50 border border-border/40 rounded-[1.25rem] shadow-inner gap-1.5">
    {Object.values(conferenceData).map((session) => (
      <button
        key={session.id}
        onClick={() => setActiveSession(session.id)}
        className={`
          relative cursor-pointer px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ease-out flex-grow sm:flex-grow-0
          ${
            activeSession === session.id
              ? // ACTIVE STATE: Keeps your primary color, adds a subtle ring and shadow for depth
                "bg-primary text-white shadow-md ring-1 ring-black/5 scale-100"
              : // INACTIVE STATE: Adds a transparent background that turns into a distinct button shape on hover
                "bg-transparent text-muted-foreground hover:bg-background hover:text-foreground hover:shadow-sm scale-[0.98] hover:scale-100"
          }
        `}
      >
        {session.title}
      </button>
    ))}
  </div>
</div>
        {/* Content Area grouped by Subject */}
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {currentSessionData.subjects.map((subject, sIdx) => (
            <div key={sIdx} className="space-y-6">
              {/* Subject Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-4 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    {subject.category}
                  </h2>
                </div>
              </div>

              {/* Abstracts Grid */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {subject.abstracts.map((abstract) => (
                  <AbstractCard key={abstract.id} abstract={abstract} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}