import React from "react"
import type { WorkerApp as WorkerApp } from "./WorkerApp"

export const WorkerAppContext = React.createContext<WorkerApp | undefined>(undefined)

export const AppTypeContext = React.createContext<"worker" | "mainThread">("mainThread")
