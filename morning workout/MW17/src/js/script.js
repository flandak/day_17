import {ProgressBar } from './ProgressBar';

const progressBar = new ProgressBar()
progressBar.gradient = 5;
progressBar.value = 0;

document.body.appendChild(progressBar.element)
document.body.appendChild(progressBar.refreshElement())


// @TODO no.1 create new instance of ProgressBar. Explore constructor of ProgressBar class!
//    Take a body element and append progress bar (element) you just created to it.
//    You shouldn't pass the whole progress bar to appendChild method, but only specific property
//    explore class ProgressBar and find out which property it is.
//
//    code here:



// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
