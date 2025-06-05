import React from "react";
import Card from "../component/Card";
import { data } from "../utils/data";
import Button from "../component/Button";
import map from "../assets/images/map.png"
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";


const Home = () => {
  const [tasks, setTasks] =  useState(data);
  console.log(tasks);
  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };

  return (
    <div className="w-full h-full sm:flex  ">
    <div className="max-sm:w-full h-[87vh] overflow-y-scroll hide-scrollbar">
        <h3 className="font-Helvetica font-bold text-3xl ml-15 max-sm:ml-6 max-sm:text-2xl">Itinerary</h3>
        <h6 className="text-[#8392AB] font-bold text-[16px] mt-2 max-sm:ml-6  max-sm:text-sm font-Helvetica ml-15">
          Day
        </h6>
        <div className="sm:ml-5 sm:mt-6 max-sm:ml-3 max-sm:mr-3">
           <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
           {tasks.map((place) => (
           <Card
           key={place.id}  
           id={place.id}   
           image={place.image}
           name={place.name}
           rating={place.rating}
           description={place.description}
         />
          ))}
          </SortableContext>
          </DndContext>
        </div>
        <Button/>
      </div>
     
    </div>
  );
};

export default Home;
