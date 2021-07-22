import { getPets, getWalkers } from "./database.js"
const walkers = getWalkers()
const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")

            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                  const assignedWalker = walkers.find(
                    (petWalker) => {
                        if (petWalker.id === pet.walkerId) {
                            return petWalker
                        }
                    }
                  )
                  window.alert(`${pet.name} is being walked by ${assignedWalker.name}`)
                }
            }  
        }
    }
)

export const Pets = () => {
    let petsHTML = "<ul>"

    for (const pet of pets) {
        petsHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petsHTML += "</ul>"

    return petsHTML
}