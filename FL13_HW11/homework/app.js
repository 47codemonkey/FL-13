const data = [{
    'folder': true,
    'title': 'Pictures',
    'children': [{
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [{
          'title': 'spain.jpeg'
        }]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [{
      'folder': true,
      'title': 'screenshots',
      'children': null
    }]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [{
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(container, data) {
  let ul = document.createElement('ul');
  for (let obj of data) {
    let li = document.createElement('li');
    if (obj.folder) {
      li.className = 'folder';
      li.innerHTML = '<i class="material-icons folder_icon" id="open">folder</i>' + obj.title;
    } else {
      li.innerHTML = '<i class="material-icons insert_drive_file">insert_drive_file</i>' + obj.title;
    }
    ul.append(li);
    if (obj.children) {
      createTree(ul, obj.children);
    }
    if (obj.folder === true && !obj.children) {
      let p = document.createElement('p');
      p.className = 'closed';
      p.innerHTML = '<i>This folder is empty!</i>';
      ul.append(p);
    }
  }
  container.append(ul);
  if (ul.parentElement.tagName === 'UL') {
    ul.classList.toggle('closed');
  }
}

createTree(rootNode, data);

let elem = document.getElementsByClassName('folder');
for (let i = 0; i < elem.length; i += 1) {
  elem[i].addEventListener('click', openFolder);
}

function openFolder() {
  if (event.target.nextSibling.classList.contains('closed')) {
    event.target.nextSibling.classList.remove('closed');
    event.target.nextSibling.classList.toggle('open');
    event.target.firstChild.innerHTML = 'folder_open';
  } else {
    event.target.nextSibling.classList.remove('open');
    event.target.nextSibling.classList.toggle('closed');
    event.target.firstChild.innerHTML = 'folder';
  }
}