import {ProgressBar } from './ProgressBar';

const progressBar = new ProgressBar(0,5)
const progressBar2 = new ProgressBar(0,5)
const progressBar3 = new ProgressBar(2,5)
const progressBar4 = new ProgressBar(0,2)
const progressBar5 = new ProgressBar(1,1)



document.body.appendChild(progressBar2.element)
document.body.appendChild(progressBar3.element)
document.body.appendChild(progressBar4.element)
document.body.appendChild(progressBar5.element)

document.body.appendChild(progressBar.refreshElement())


// @TODO no.1 create new instance of ProgressBar. Explore constructor of ProgressBar class!
//    Take a body element and append progress bar (element) you just created to it.
//    You shouldn't pass the whole progress bar to appendChild method, but only specific property
//    explore class ProgressBar and find out which property it is.
//
//    code here:



// @TODO no.2 once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button
