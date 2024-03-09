document.addEventListener("DOMContentLoaded", () => {
    const buckets = document.querySelectorAll(".bucket");
    buckets.forEach((bucket, index) => {
      // 로컬 스토리지에서 상태 읽기
      const isDone = localStorage.getItem("bucket" + index) === "done";
      if (isDone) {
        bucket.classList.add("done");
      }
  
      // 클릭 이벤트 핸들러 재할당
      bucket.addEventListener("click", () => toggleDone(bucket, index));
    });
  });
  
  const bucketImages = [
    'Bucket01.png',
    'Bucket02.png',
    'Bucket03.png',
    'Bucket04.png',
    'Bucket05.png',
    'Bucket06.png'
  ];
  function addItem() {
    const newItemText = document.getElementById('new-item').value;
    if (!newItemText.trim()) return;
  
    const randomImage = bucketImages[Math.floor(Math.random() * bucketImages.length)];
    const imagePath = `images/${randomImage}`;
    const index = document.querySelectorAll('.bucket').length;
  
    const newItem = document.createElement('div');
    newItem.classList.add('bucket', 'center', 'img' + (index % bucketImages.length + 1));
    newItem.style.backgroundImage = `url('${imagePath}')`;
    newItem.textContent = newItemText;
  
    // 버킷 리스트에 클릭 이벤트 추가
    newItem.addEventListener("click", () => toggleDone(newItem, index));
  
    // 삭제 버튼 추가
    const deleteButton = document.createElement('img');
    deleteButton.src = 'images/Delete.png';
    deleteButton.alt = '삭제';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function() {
      newItem.remove();
      localStorage.removeItem("bucket" + index);
    };
  
    // 삭제 버튼을 아이템에 추가
    newItem.appendChild(deleteButton);
  
    document.querySelector('.flex-row.wrap').appendChild(newItem);
    document.getElementById('new-item').value = '';
  
  }
  function toggleDone(bucket, index) {
    bucket.classList.toggle("done");
    const isDone = bucket.classList.contains("done");
    localStorage.setItem("bucket" + index, isDone ? "done" : "");
    
    // 완료 이미지 설정 또는 제거
    if (isDone) {
      bucket.style.backgroundImage = "url('Done.png')";
    } else {
      const bgImage = bucketImages[index % bucketImages.length];
      bucket.style.backgroundImage = `url('images/${bgImage}')`;
    }
  }
document.getElementById('audio-control').addEventListener('click', function() {
  const music = document.getElementById('background-music');
  if (music.paused || music.ended) {
    music.play();
  } else {
    music.pause();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const buckets = document.querySelectorAll(".bucket");
  buckets.forEach((bucket, index) => {
    // 로컬 스토리지에서 상태 읽기
    const isDone = localStorage.getItem("bucket" + index) === "done";
    if (isDone) {
      bucket.classList.add("done");
    }

    // 삭제 버튼 추가
    addDeleteButton(bucket, index);
    
    // 클릭 이벤트 핸들러 재할당
    bucket.addEventListener("click", () => toggleDone(bucket, index));
  });
});

function addDeleteButton(bucket, index) {
  const deleteButton = document.createElement('img');
  deleteButton.src = 'images/Delete.png';
  deleteButton.alt = '삭제';
  deleteButton.classList.add('delete-button');
  deleteButton.onclick = function() {
    bucket.remove();
    localStorage.removeItem("bucket" + index);
  };
  bucket.appendChild(deleteButton);
} 