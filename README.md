# mf_sample
Module Federation Sample for Angular with bootstrap and angular material

This sample require node 16 and angular 15
To Run the demo, open the project in VSCode

Terminal 1:
cd child1
npm i
ng serve
open http://localhost:4901/ to verify it is working

Terminal 2:
cd parent
npm i
ng serve
open your browser on http://localhost:4900/
click the Children 1 Button

At this point, only module federation is working.