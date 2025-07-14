from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = []

@app.get("/tasks")
def get_tasks():
    return tasks

@app.post("/tasks")
def add_task(task: dict):
    tasks.append(task)
    return {"message": "Task added successfully!"}

@app.delete("/tasks/{index}")
def delete_task(index: int):
    if 0 <= index < len(tasks):
        tasks.pop(index)
        return {"message": "Task deleted"}
    return {"error": "Invalid index"}