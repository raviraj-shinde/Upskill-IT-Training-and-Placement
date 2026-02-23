import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

function App() {

  const courses = [
    {
      id: 1,
      title: "Java Full Stack",
      description: "Spring Boot + React + MySQL with real projects",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop",
      price: 4999,
    },
    {
      id: 2,
      title: "React Developer",
      description: "Hooks, Routing, API, State management",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop",
      price: 2999,
    },
    {
      id: 3,
      title: "DevOps",
      description: "Docker, CI/CD, Kubernetes basics",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=250&fit=crop",
      price: 3999,
    },
  ];

  return (
    <>
      <Header />

      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Courses</h2>

        <div className="row g-4">
          {
            courses.map((course) => (
              <div key={course.id} className="col-md-4">
                <Card
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  price={course.price}
                />
              </div>
            ))
          }
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
