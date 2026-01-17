#!/bin/bash

modules=(
  "lesson-files"
  "homeworks"
  "homework-submissions"
  "exams"
  "exam-results"
  "questions"
  "question-answers"
)

for module in "${modules[@]}"; do
  echo "Generating $module"
  npx nest generate module modules/$module
  npx nest generate controller modules/$module
  npx nest generate service modules/$module
done