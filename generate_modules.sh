#!/bin/bash

modules=(
  "purchased-courses"
  "ratings"
  "last-activities"
  "lesson-groups"
  "lessons"
  "lesson-views"
  "lesson-files"
  "homeworks"
  "homework-submissions"
  "exams"
  "exam-results"
  "questions"
  "question-answers"
)

for module in "${modules[@]}"; do
  npx nest generate resource modules/$module --no-spec
done