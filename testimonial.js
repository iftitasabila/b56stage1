const testimonials = [
    {
        image : "https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Bagus banget",
        author : "~ Cindy",
        rating : 5
    },
    {
        image : "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Mantap",
        author : "~ Sean",
        rating : 3
    },
    {
        image : "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        content : "Keren deh",
        author : "~ Laura",
        rating : 4
    },
]

function allTestimonial() {
    let testimonialHTML =``

testimonials.forEach(testimonial => {
    testimonialHTML += `<div class="testimonial">
    <img 
    src="${testimonial.image}"
    class="profile-testimonial"
    >
    <p class="content">${testimonial.content}</p>
    <p class="author">${testimonial.author}</p>
</div>`
})

document.getElementById("testimonials").innerHTML = testimonialHTML
}

function filterTestimonial (rating) {
    const filterTestimonialByRating = testimonials.filter(testimonial => {
        return testimonial.rating == rating
    })

    const testimonialHTML = filterTestimonialByRating.map(testimonial => {
        return `<div class="testimonial">
        <img 
        src="${testimonial.image}"
        class="profile-testimonial"
        >
        <p class="content">${testimonial.content}</p>
        <p class="author">${testimonial.author}</p>
    </div>`
    })

    document.getElementById("testimonials").innerHTML = testimonialHTML
}

allTestimonial()