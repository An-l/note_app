$(function(argument) {

	var index = 0;
	var allNotes = {};

	var addNote = function(argument) {
		var a = $('<a class="list-group-item" href="#">');
		var h4 = $('<h4 class="list-group-item-heading">');
		h4.text('New note');
		a.append(h4);

		a.on('click', function(argument) {
			$(this).addClass('active').siblings().removeClass('active');

			favor('allList');
			// console.log(allNotes);
		});

		return a;
	};

	$('#addNote').on('click', function(event) {
		var a = addNote();
		a.data('index', index);

		allNotes[index] = {
			content: a,
			favor: false
		};
		index++;

		console.log(allNotes);

		$('#allList').append(a);
		$(a).addClass('active').siblings().removeClass('active');

		favor('allList');
	});

	$('#delNote').on('click', function(event) {
		if ($('.list-group-item').length) {
			//还需要判断在哪个tab，在收藏tab下删除=取消收藏
			if ($('#allTab').is('.active')) {
				var item = $('#allList').find('.active');
				var index = item.data('index');

				$('#allList').find('.list-group-item').remove('.active');
				$('#allList').find('.list-group-item').eq(0).addClass('active');

				favor('allList');

				delete allNotes[index];
			}
			// else if ($('#favorTab').is('.active')) {
			// 	var item = $('#favorTab').find('.active');
			// 	var index = item.data('index');

			// 	allNotes[index].favor = false;

			// 	$('#favorList').remove('.active');
			// 	$('#favorList').eq(0).addClass('active');

			// 	favor('favorList');
			// }
		}
	});

	$('#favor').on('click', function(event) {
		if ($('#favor').is('.starred')) {
			$('#favor').removeClass('starred');

			if ($('#allTab').is('.active')) {
				var index = $('#allList').find('.active').data('index');
			} else if ($('#favorTab').is('.active')) {
				var index = $('#favorList').find('.active').data('index');
			}
			allNotes[index].favor = false;

			// delete favoritesNotes[index];
			initList('favorList');
		} else {
			$('#favor').addClass('starred');

			var index = $('#allList').find('.active').data('index');
			allNotes[index].favor = true;
			// favoritesNotes[index] = {
			// 	content: allNotes[index].content,
			// 	favor: allNotes[index].favor
			// };
		}
	});

	$('#favorTab').on('click', function(event) {
		$(this).addClass('active');
		$('#allTab').removeClass('active');

		//把favoritesNotes添加到favorTab
		$('#allList').hide();
		// for (index in favoritesNotes) {
		// 	var item = favoritesNotes[index].content;
		// 	$('#favorList').append(item);
		// 	$(item).on('click', function(argument) {
		// 		$(this).addClass('active').siblings().removeClass('active');
		// 		favor();
		// 		// console.log(allNotes);
		// 	});
		// }
		initList('favorList');
		$('#favorList').show();

	});

	$('#allTab').on('click', function(event) {
		$(this).addClass('active');
		$('#favorTab').removeClass('active');

		$('#favorList').hide();
		initList('allList');
		$('#allList').show();

	});

	// var init = function(tab) {
	// 	if (isEmptyObject(tab)) {
	// 		for (index in tab) {
	// 			var item = tab[index].content;
	// 			item.on('click', function(argument) {
	// 				$(this).addClass('active').siblings().removeClass('active');

	// 				//判断是否已收藏
	// 				favor($(this));
	// 				// console.log(allNotes);
	// 			});
	// 			$('.list-group').append(tab[index].content);
	// 		}
	// 	}
	// };

	//判断当前active是否已收藏
	var favor = function(list) {
		var item = $('#' + list).find('.active');
		if (item.length) {
			var index = item.data('index');
			if (isEmptyObject(allNotes)) {
				// debugger
				if (allNotes[index].favor) {
					$('#favor').addClass('starred');
				} else {
					$('#favor').removeClass('starred');

				}
			} else {
				$('#favor').removeClass('starred');
			}
		}else {
			$('#favor').removeClass('starred');
		}
	};

	// var favorTab = function(argument) {
	// 	//清空favorList
	// 	$('#favorList').html('');
	// 	for (index in favoritesNotes) {
	// 		var item = favoritesNotes[index].content;
	// 		$(item).data('index', index);
	// 		$('#favorList').append(item);
	// 		$(item).on('click', function(argument) {
	// 			$(this).addClass('active').siblings().removeClass('active');
	// 			favor();
	// 			// console.log(allNotes);
	// 		});
	// 	}
	// };

	var initList = function(list) {
		$('#' + list).html('');
		switch (list) {
			case 'favorList':
				for (index in allNotes) {
					if (allNotes[index].favor) {
						var item = allNotes[index].content;
						$(item).data('index', index);
						$('#favorList').append(item);
						$(item).on('click', function(argument) {
							// $('#favorList').find('.list-group-item').removeClass('active');
							$(this).addClass('active').siblings().removeClass('active');
							favor('favorList');
						});
					}
				}
				break;
			case 'allList':
				for (index in allNotes) {
					var item = allNotes[index].content;
					$(item).data('index', index);
					$('#allList').append(item);

					$('#allList').find('.list-group-item').removeClass('active');

					$(item).on('click', function(argument) {
						$(this).addClass('active').siblings().removeClass('active');
						favor('allList');
					});
				}
				break;
		}
	};

	//判断对象是否为空
	var isEmptyObject = function(obj) {
		for (var key in obj) {
			return true;
		}
		return false;
	};


});