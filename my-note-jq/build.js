$(function() {
	var allNotes = [];
	var activeNote = {};
	var favorItemIndex = [];

	var tab = 'allTab';

	var $list = $('#list');
	var $favorBtn = $('#favor');
	var $textArea = $('.form-control');

	$('#addNote').on('click', function() {
		var newNote = {
			content: 'New Note',
			favor: false
		};

		allNotes.push(newNote);
		activeNote = newNote;

		initList(tab);
	});

	$('#delNote').on('click', function() {
		//把当前选中项activeNote从allNotes中删除
		var index = allNotes.indexOf(activeNote);
		allNotes.splice(index, 1);

		if (tab === 'allTab') {
			activeNote = allNotes[0]; //把allNotes第一项设为当前选中项
		} else {
			// 当tab == 'favorTab'
			if (favorItemIndex.length > 0) {
				//favorItemIndex不为空时,
				//activeNote等于allNotes中favor = true的第一项
				activeNote = allNotes[favorItemIndex.shift()];
			}
		}

		initList(tab);
	});

	$favorBtn.on('click', function() {
		// 修改当前选中项的收藏状态，并覆盖到allNotes中
		var index = allNotes.indexOf(activeNote);
		activeNote.favor = !activeNote.favor;
		allNotes[index] = activeNote;

		//判断当前选中项是否已收藏
		activeNote.favor ? $favorBtn.addClass('starred') : $favorBtn.removeClass('starred');
		if (tab === 'favorTab') {
			initList(tab);
		}
	});


	$('#favorTab').on('click', function() {
		tab = 'favorTab';
		initList(tab);
	});

	$('#allTab').on('click', function() {
		tab = 'allTab';
		initList(tab);
	});

	$textArea.on('input', function() {
		var text = $textArea.val();
		// 修改当前选中项的content，并覆盖到allNotes中
		var index = allNotes.indexOf(activeNote);
		allNotes[index].content = text;

		$list.find('.active>h4').text(text.slice(0, 20));
	});


	//创建note单元
	var createNote = function(note) {
		var a = $('<a class="list-group-item" href="#">');
		var h4 = $('<h4 class="list-group-item-heading">');
		h4.text(note.content);
		a.append(h4);

		if (note == activeNote) {
			a.addClass('active');
		}

		//判断是否已收藏
		// console.log(activeNote);
		activeNote.favor ? $favorBtn.addClass('starred') : $favorBtn.removeClass('starred');


		a.on('click', function() {
			activeNote = note;

			$(this).addClass('active').siblings().removeClass('active');

			//判断是否已收藏
			activeNote.favor ? $favorBtn.addClass('starred') : $favorBtn.removeClass('starred');

			//将activeNote的content绑定到textarea
			$textArea.val(activeNote.content);
		});

		//将activeNote的content绑定到textarea
		$textArea.val(activeNote.content);

		$list.append(a);
	};

	//初始化list列表
	var initList = function(tab) {
		// 当allNotes为空时，取消收藏样式
		if (allNotes.length <= 0) {
			$favorBtn.removeClass('starred');
		}

		$list.html(''); //清空list

		switch (tab) {
			case 'allTab':
				$('#allTab').addClass('active');
				$('#favorTab').removeClass('active');

				if (favorItemIndex.length <= 0) {
					//favorItemIndex为空时,说明favorTab的list为空
					//activeNote等于allNotes的第一项
					activeNote = allNotes[0];
				}

				for (var i = 0; i < allNotes.length; i++) {
					createNote(allNotes[i]);
				}
				break;
			case 'favorTab':
				$('#favorTab').addClass('active');
				$('#allTab').removeClass('active');

				if (favorItemIndex.length <= 0) {
					$favorBtn.removeClass('starred');
				}

				favorItemIndex = []; //清空favorItemIndex

				for (var i = 0; i < allNotes.length; i++) {
					if (allNotes[i].favor) {
						favorItemIndex.push(i); //把收藏项的i存入favorItemIndex中
						createNote(allNotes[i]);
					}
				}
				break;
		}
	};

	// 初始化入口函数
	initList(tab);
});