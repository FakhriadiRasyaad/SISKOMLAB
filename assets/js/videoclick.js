
    document.addEventListener('DOMContentLoaded', function() {
        var thumbnails = document.querySelectorAll('.video-thumbnail');
        thumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function() {
                var videoUrl = this.getAttribute('data-video');
                var iframe = document.createElement('iframe');
                iframe.setAttribute('width', '100%');
                iframe.setAttribute('height', '315');
                iframe.setAttribute('src', videoUrl + '?autoplay=1');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', true);

                var figure = this.parentNode;
                figure.innerHTML = '';
                figure.appendChild(iframe);
            });
        });
    });

