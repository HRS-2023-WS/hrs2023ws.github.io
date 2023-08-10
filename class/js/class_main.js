const class_content = [{
        'title': '2年3組　企画紹介動画',
        'disc': '2年3組の企画紹介動画になります！',
        'grade': 1,
        'class': 2,
        'className': '3',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/7WgCFQv_rt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        'title': '2年1組　企画紹介動画',
        'disc': '',
        'grade': 1,
        'class': 0,
        'className': '1',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/040qITqtT4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '1年D組　宣伝動画',
        'disc': '',
        'grade': 3,
        'class': 3,
        'className': 'D',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/F9IKwxEb80Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '1年4組　企画紹介動画',
        'disc': '',
        'grade': 0,
        'class': 3,
        'className': '4',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/XpWTX65hix8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },


    {
        'title': '3年4組　宣伝動画',
        'disc': '',
        'grade': 2,
        'class': 3,
        'className': '4',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/KFGEUi0kzA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '1年6組　宣伝動画',
        'disc': '',
        'grade': 0,
        'class': 5,
        'className': '6',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/avpTxkHD4d4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '2年6組　企画紹介動画',
        'disc': '',
        'grade': 1,
        'class': 5,
        'className': '6',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/5yPWBorqjac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '2年B組　宣伝動画',
        'disc': '',
        'grade': 4,
        'class': 1,
        'className': 'B',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/yNE3jWEf_Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '3年2組　企画紹介動画',
        'disc': '',
        'grade': 2,
        'class': 1,
        'className': '2',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/HiZiICnM64o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '1年C組　宣伝動画',
        'disc': '',
        'grade': 3,
        'class': 2,
        'className': 'C',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/f3Jf9KB8sG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '2年4組　宣伝動画',
        'disc': '',
        'grade': 1,
        'class': 3,
        'className': '4',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/_LnpQg8oXiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },

    {
        'title': '2年5組　宣伝動画',
        'disc': '',
        'grade': 1,
        'class': 4,
        'className': '5',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/GYodfYRDKZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        'title': '1年1組　企画紹介動画',
        'disc': '',
        'grade': 0,
        'class': 0,
        'className': '1',
        'youtubeTag': '<iframe width="560" height="315" src="https://www.youtube.com/embed/kGGQYc0uyWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },


];

getData();

function getData() {
    let _grade = getFromUrl('grade');
    let _class = getFromUrl('class');

    $(document).ready(function() {
        for (let i = 0; i < 5; i++) {
            if (i == _grade) {
                $('.grade_text_' + i).css('font-weight', '500');
            } else {
                $('.grade_text_' + i).css('font-weight', '300');
            }
        }

    });


    let array_count = findWhere(_grade, _class);
    if (array_count != null) {
        show_content(array_count, _grade, _class);

        let same_grade_count = findSameGrade(_grade, _class);
        show_same_grade(same_grade_count, _grade, _class);
    } else {
        if (_grade == null) {
            _grade = 0;
        }
        let same_grade_count = findSameGrade(_grade, 30);
        show_same_grade(same_grade_count, _grade, 30);
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

function findWhere(_grade, _class) {
    for (let i = 0; i < class_content.length; i++) {
        if (class_content[i]['grade'] == _grade && class_content[i]['class'] == _class) {
            return i;
        }
    }
    return null;
}

function show_content(num, _grade, _class) {
    let gradeList = [1, 2, 3, 1, 2, 3];
    $(document).ready(function() {
        $('.iframe_outer').html(class_content[num]['youtubeTag']);
        $('.content_class').html(gradeList[_grade] + 'ー' + class_content[num]['className']);
    });
}


function findSameGrade(_grade, _class) {
    let list = [];
    for (let i = 0; i < class_content.length; i++) {
        if (class_content[i]['grade'] == _grade && class_content[i]['class'] != _class) {
            list.push(i);
        }
    }
    return list;
}

function show_same_grade(num, _grade, _class) {
    let gradeList = [1, 2, 3, 1, 2, 3];
    let put_html = '';

    for (let index = 0; index < num.length; index++) {
        put_html +=
            `
        <a href='./index.html?grade=` + _grade + `?class=` + class_content[num[index]]['class'] + `'>
            <div class="item">
                <img src="images/` + _grade + '-' + class_content[num[index]]['class'] + `.jpg" class="thumbnail_pic">
                <p class="item_title">` + gradeList[_grade] + `-` + class_content[num[index]]['className'] + `</p>
            </div>
        </a> `;

    }
    $(document).ready(function() {
        $('.same_grade_list').html(put_html);
    });
}


function change_grade(num) {
    location.href = './index.html?grade=' + num;
}