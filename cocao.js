console.log('cocao.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:brown">Dark Chocolate Survey</h3>'
    
    h += 'What % of cocao do you like the most: <input id="cocaopct" size=4 value="70"> '
    h += '<button id="subButton" type="button" class="btn btn-primary">submit</button> '
    h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
     
})()
