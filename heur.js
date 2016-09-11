firebase.database().ref('users/brian/devices').once("value", function(snapshot){
          var key = snapshot.key();
          var childData = snapshot.val();
        
          var outerDiv = document.createElement('div');
          outerDiv.className = "col-md-4";
          document.getElementsByClassName('row')[0].appendChild(outerDiv);
          
          var createDiv = document.createElement('div');
          var createMap = document.createElement('div');
          var createTitle = document.createElement('h5');
          var createEmpty = document.createElement('p');
      
          createDiv.className = "post";
          createMap.id = "map";
        //   createTitle.textContent = "Title";
        //   createButton.dataset.id = key;
        //   createAuthor.className = "detail-author";
        //   createLove.className = "detail-love";
        //   createLove.dataset.id = key;
          
        //   createTitle.innerHTML = childData.content;
        //   createAuthor.innerHTML = childData.author;
        //   createLove.innerHTML = childData.love;
          
          outerDiv.appendChild(createDiv);
          outerDiv.appendChild(createMap);
          outerDiv.appendChild(createTitle);
          outerDiv.appendChild(createEmpty);
        });
          