import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import TaskChart from "../components/TaskChart";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


import { useAuth } from "../context/AuthContext";

import {
  getTasks,
  deleteTask,
} from "../services/taskService";

import { createCheckout } from "../services/paymentService";


const Dashboard = () => {


  const { user, logout } = useAuth();


  const [tasks,setTasks] = useState([]);

  const [loading,setLoading] = useState(true);


  const [search,setSearch] = useState("");

  const [statusFilter,setStatusFilter] = useState("All");




  useEffect(()=>{

    loadTasks();

  },[]);






  const loadTasks = async()=>{


    try{


      setLoading(true);


      const res = await getTasks();


      setTasks(res.data);



    }catch(error){


      console.log(error);

      toast.error(
        "Failed to load tasks"
      );


    }finally{


      setLoading(false);


    }


  };







  const addTask = (task)=>{


    setTasks((prev)=>[
      task,
      ...prev
    ]);


    toast.success(
      "Task Created"
    );


  };








  const handleDelete = async(id)=>{


    const previous=[...tasks];



    setTasks((prev)=>

      prev.filter(
        task=>task._id!==id
      )

    );



    try{


      await deleteTask(id);


      toast.success(
        "Task Deleted"
      );


    }catch(error){


      setTasks(previous);


      toast.error(
        "Delete Failed"
      );


    }


  };








  const handleUpdate=(updatedTask)=>{


    setTasks((prev)=>

      prev.map(task=>

        task._id===updatedTask._id

        ? updatedTask

        : task

      )

    );


    toast.success(
      "Task Updated"
    );


  };









  const handleUpgrade = async()=>{


    try{


      const res =
      await createCheckout();



      window.location.href =
      res.data.url;



    }catch(error){


      console.log(error);


      toast.error(
        "Stripe Checkout Failed"
      );


    }


  };








  const total =
  tasks.length;



  const pending =
  tasks.filter(
    task=>task.status==="Pending"
  ).length;



  const progress =
  tasks.filter(
    task=>task.status==="In Progress"
  ).length;



  const completed =
  tasks.filter(
    task=>task.status==="Completed"
  ).length;







  const filteredTasks =
  tasks.filter((task)=>{


    const title =
    task.title?.toLowerCase() || "";



    const description =
    task.description?.toLowerCase() || "";



    const matchesSearch =

    title.includes(
      search.toLowerCase()
    )

    ||

    description.includes(
      search.toLowerCase()
    );




    const matchesStatus =

    statusFilter==="All"

    ||

    task.status===statusFilter;




    return (
      matchesSearch &&
      matchesStatus
    );


  });







  return (

    <div className="dashboard">



      <Navbar

        user={user}

        logout={logout}

      />





      <div className="container">





        <div className="dashboard-header">


          <div>


            <h1>
              Task Dashboard
            </h1>


            <p>
              Manage all your tasks efficiently.
            </p>


          </div>





          {
            user?.plan==="free" && (

              <button

              className="primary-btn"

              onClick={handleUpgrade}

              >

              Upgrade to Pro

              </button>

            )
          }






          {
            user?.plan==="pro" && (

              <button

              className="primary-btn"

              disabled

              >

              Pro Active ✅

              </button>

            )
          }




        </div>









        <div className="stats-grid">


          <StatsCard
          title="Total Tasks"
          value={total}
          />



          <StatsCard
          title="Pending"
          value={pending}
          />



          <StatsCard
          title="In Progress"
          value={progress}
          />



          <StatsCard
          title="Completed"
          value={completed}
          />



        </div>









        <div className="dashboard-grid">



          <div className="chart-box">


            <TaskChart

            tasks={tasks}

            />


          </div>





          <div className="form-box">


            <TaskForm

            onTaskCreated={addTask}

            />


          </div>



        </div>









        <div className="filter-bar">



          <input


          type="text"


          placeholder="Search by title or description..."


          value={search}


          onChange={(e)=>

            setSearch(e.target.value)

          }


          />






          <select


          value={statusFilter}


          onChange={(e)=>

            setStatusFilter(e.target.value)

          }


          >


          <option value="All">
            All
          </option>


          <option value="Pending">
            Pending
          </option>


          <option value="In Progress">
            In Progress
          </option>


          <option value="Completed">
            Completed
          </option>



          </select>






          <button

          className="primary-btn"

          onClick={loadTasks}

          >

          Refresh

          </button>





        </div>









        {

        loading ? (

          <div className="empty-state">

            <h2>
              Loading...
            </h2>

          </div>


        )

        :

        filteredTasks.length===0 ? (


          <div className="empty-state">


            <h2>
              No Tasks Found
            </h2>


            <p>
              Create your first task to get started.
            </p>


          </div>


        )


        :


        (


          <TaskList


          tasks={filteredTasks}


          onDelete={handleDelete}


          onUpdate={handleUpdate}


          />


        )


        }






      </div>


    </div>


  );

};



export default Dashboard;