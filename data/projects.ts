export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  role: string;
  github: string;
  category: string;
  liveUrl?: string;
  publication?: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Health Insurance Cost Prediction",
    description:
      "ML website to predict US individual health insurance costs using public datasets",
    longDescription:
      "According to the journal Medicine and Public Issues, the United States has the most expensive health care in the world. This website aims to predict the cost of individual health insurance in the United States by using Machine Learning techniques. Based on public datasets from the USA, users can easily find out their own estimated insurance costs, help in financial planning and better understand the factors that affect health insurance premiums.",
    tech: ["Python", "Machine Learning", "Streamlit"],
    role: "Developer",
    github: "https://github.com/ascendiazorg/health_insurance",
    liveUrl: "https://github.com/ascendiazorg/health_insurance",
    category: "Machine Learning",
    icon: "🏥",
  },
  {
    id: 2,
    title: "Indonesia Visitor Analysis",
    description:
      "ASEAN dataset analysis of international visitor influx to Indonesia from 2015–2020",
    longDescription:
      "Based on ASEAN dataset, Indonesia Visitor analyzes the influx of international visitors to Indonesia, focusing on the top 10 contributing countries and their impact on the tourism sector. Malaysia is the leading country with 23.7% of visitors, highlighting the strong regional ties. The data also covers visitor trends from 2015 to 2020, with a notable decrease in 2020 due to the COVID-19 pandemic. The project provides insights into the distribution of total visitors, identifying patterns in visitor numbers and highlighting the top 5 countries with the least visitors to Indonesia, where Japan ranks the lowest with 2.8 million visitors.",
    tech: ["R", "Data Visualization", "ggplot2"],
    role: "Data Analyst",
    github: "https://github.com/ascendiazorg/indonesia_visitor_analysis",
    liveUrl: "https://github.com/ascendiazorg/indonesia_visitor_analysis",
    category: "Data Visualization",
    icon: "🗺️",
  },
  {
    id: 3,
    title: "Netflix Subscriptions Forecasting",
    description:
      "ARIMA-based predictive model for forecasting Netflix subscription growth trends",
    longDescription:
      "The increasing demand for streaming services has led Netflix to see a significant surge in its subscription base. Leveraging historical subscription data, this project aims to develop a predictive model that can forecast future subscriptions, allowing Netflix to better plan for subscriber growth trends. ARIMA models are well-suited for time series forecasting due to their ability to handle temporal dependencies and seasonality. This project produces a robust forecasting model capable of predicting future Netflix subscription trends.",
    tech: ["Python", "ARIMA", "Time Series", "Data Science"],
    role: "Data Scientist",
    github: "https://github.com/ascendiazorg/netflix_subscriptions_predict",
    liveUrl: "https://github.com/ascendiazorg/netflix_subscriptions_predict",
    category: "Data Science",
    icon: "📊",
  },
  {
    id: 4,
    title: "Splittr",
    description:
      "Platform for sharing subscription fees and group cost management",
    longDescription:
      "Splittr is a platform that allows users to share subscription fees for apps like YouTube Premium, Spotify Premium, and more, reducing the burden of individual costs. In addition, this platform also supports group cost sharing, allowing users to organize shared expenses, such as when traveling with friends or family, making it easier to manage finances collaboratively. Users can choose the app share feature to share app subscriptions or all-round share to share costs more widely, with the support of website programming-based technology.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Front-End Developer",
    github: "https://github.com/dwi-putra227/splittr",
    liveUrl: "https://github.com/dwi-putra227/splittr",
    category: "Web Development",
    icon: "💰",
  },
  {
    id: 5,
    title: "Sleep Health Analysis Using Lasso Regression",
    description:
      "Research paper published at ICIMTech 2024 — analyzing sleep quality from lifestyle data",
    longDescription:
      "The Lasso regression model has strong performance with high training and testing scores, as well as low error rates, indicating that this model is reliable in analyzing lifestyle data to predict sleep quality. The results showed a training score of 0.9113 and a testing score of 0.8995, indicating that the model has high accuracy in predicting sleep quality, also supported by a low error rate (0.1757). Key insights: sleep duration, physical activity, stress, and sleep disturbances are the main factors that affect sleep quality. The results of this study can be used to design more effective interventions to improve sleep quality and overall well-being.",
    tech: ["Python", "Lasso Regression", "Machine Learning", "Research"],
    role: "Developer & Researcher",
    github: "https://github.com/ascendiazorg/sleep_health_using_lasso_regression",
    liveUrl: "https://ieeexplore.ieee.org/abstract/document/10780829",
    category: "Research",
    publication:
      "2024 International Conference on Information Management and Technology (ICIMTech)",
    icon: "🔬",
  },
];

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
