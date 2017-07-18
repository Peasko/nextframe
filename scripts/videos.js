$(document).ready(function() {
    var $projects = $('.c-projects');
    var $modal = $('#modal-video');
    var $previews = $projects.find('.preview');

    $previews.on('click', function(e){
        $this = $(this);
        $video = $this.find('.video-thumbnail');
        imageName = $video.data('modal-img');
        videoName = $video.data('modal-video');
        videoElement = '<video class="test" poster="videos/' + imageName + '.jpg" controls>'
                            + '<source src="videos/' + videoName + '.mp4" type="video/mp4">'
                        + '</video>';
        $modal.find('.modal-body').html(videoElement);
        $modal.modal();
        plyr.setup($modal.find('video')[0], {autoplay: true});
    });

    $previews.on('mousedown', function() {
        $(this).addClass('clicked');
    });

    $previews.on('mouseup', function() {
        $(this).removeClass('clicked');
    });

    $previews.on('mouseleave', function() {
        $(this).removeClass('clicked');
    });

    $modal.on('hidden.bs.modal', function (e) {
        var player = plyr.setup($modal.find('video')[0]);
        player[0].stop();
    })
});
