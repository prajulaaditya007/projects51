const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda at consequuntur, corporis culpa delectus dicta doloremque, dolores earum esse est id itaque laboriosam maxime minima mollitia nam neque nisi non numquam perspiciatis possimus provident quas quia quod quos repellat repellendus rerum sed, sunt? Animi aspernatur beatae blanditiis commodi culpa debitis delectus distinctio dolorum eos eveniet facilis illum magnam magni minima modi molestias natus necessitatibus nesciunt nulla officiis omnis quam, recusandae repellendus repudiandae rerum suscipit temporibus ut vitae voluptatibus voluptatum! Architecto distinctio dolorum facilis ratione voluptate. Ab asperiores eius, excepturi inventore molestiae nam necessitatibus neque nostrum obcaecati odio odit placeat, ratione suscipit? Aliquid architecto at aut consequatur dolorem dolorum earum eveniet ex excepturi, expedita fugit incidunt ipsum itaque iusto minima nostrum nulla, omnis perferendis quaerat quas quia quisquam repudiandae saepe, sapiente tempora ullam unde ut? Autem blanditiis cum cumque dolores ducimus eum excepturi ipsam ipsum iusto maiores non perferendis quisquam saepe soluta veniam, voluptas voluptatum. Ab animi atque eaque id labore libero nisi quia repellat sunt voluptates! Aliquid autem corporis delectus doloribus ea earum eos et, eum exercitationem id minima nobis perspiciatis placeat recusandae rerum soluta vel vitae. Accusantium architecto consequatur est magnam maxime nobis quidem ratione rerum, voluptates? Necessitatibus?'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 250 / e.target.value)