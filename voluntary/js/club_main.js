const club_content = [


    {
        'title': '3点リーダー症候群',
        'disc': '',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/IExMNwGaDrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '有志ミュージカル',
        'disc': '',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/1Q9E0yYLktA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '渋ママコーラス隊',
        'disc': '',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/rNNzCp0iMpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }, {
        'title': '渋オケ',
        'disc': '',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/WyK6pE21ii8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },


    {
        'title': '劇団24期',
        'disc': '',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/gpj7icKWloM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },



];

getData();

function getData() {
    let _id = getFromUrl('id');

    // $(document).ready(function() {
    //     for (let i = 0; i < 5; i++) {
    //         if (i == _grade) {
    //             $('.grade_text_' + i).css('font-weight', '500');
    //         } else {
    //             $('.grade_text_' + i).css('font-weight', '300');
    //         }
    //     }

    // });


    if (_id != null) {
        show_content(_id);
        show_same_grade(_id, false);
    } else {

        show_same_grade(30000, true);
        $(document).ready(function() {
            $('.video_section').remove();
        });
    }

}




function getFromUrl(word) {
    const _url = location.href;
    let startInfo = _url.indexOf('?' + word + '=');
    if (startInfo >= 0) {
        let split_text = _url.split('');
        let search_text = '';
        for (let i = startInfo + 2 + word.length; i < split_text.length; i++) {
            if (split_text[i] == '?') {
                break;
            } else {
                search_text += split_text[i];
            }
        }
        return parseInt(search_text);
    } else {
        return null;
    }
}


function show_content(_id) {
    $(document).ready(function() {
        $('.iframe_outer').html(club_content[_id]['youtubeTag']);
        $('.content_title').html(club_content[_id]['title']);
    });
}



function show_same_grade(_id, show_all) {
    let put_html = '';

    if (!show_all) {
        for (let index = 0; index < ((index + 5) % club_content.length); index++) {
            if (index != _id) {
                put_html +=
                    `
            <a href='./index.html?id=` + index + `'>
                <div class="item">
                    <img src="images/v-` + index + `.jpg" class="thumbnail_pic">
                    <p class="item_title">` + club_content[index]['title'] + `</p>
                </div>
            </a> `;
            }


        }
    } else {
        for (let index = 0; index < club_content.length; index++) {
            console.log(33);
            if (index != _id) {
                put_html +=
                    `
            <a href='./index.html?id=` + index + `'>
                <div class="item">
                    <img src="images/v-` + index + `.jpg" class="thumbnail_pic">
                    <p class="item_title">` + club_content[index]['title'] + `</p>
                </div>
            </a> `;
            }


        }
    }

    $(document).ready(function() {
        $('.same_grade_list').html(put_html);
    });
}


function change_grade(num) {
    location.href = './index.html?grade=' + num;
}