let n = 1;

getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //console.log(request.response);

        const array = JSON.parse(request.response);
        array.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/getJSN.json");
  request.onreadystatechange = () => {
    //console.log(request.readyState);

    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const object = JSON.parse(request.response);
        //console.log(object);
        myName.textContent = object.name;
      } else {
        alert("加载JSON失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/getXML.xml");
  request.onreadystatechange = () => {
    //console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
        const div = document.createElement("div");
        div.innerHTML = text.trim();
        document.body.appendChild(div);
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/getHTML.html");
  request.onreadystatechange = () => {
    //console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/getJS.js");
  request.onreadystatechange = () => {
    //console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建script标签
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    //console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};
