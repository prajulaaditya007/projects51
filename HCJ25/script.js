const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1168&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium numquam porro quas.'
  profile_img.innerHTML =
    '<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1618936707082/xiuEItvR-.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress" alt="" />'
  name.innerHTML = 'Prajul Sahu'
  date.innerHTML = 'Sept 21, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
