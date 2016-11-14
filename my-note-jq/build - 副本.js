$(function(argument) {
	var index = 0;
	var allNotes = {};
	var favoritesNotes = {};
	var addNote = function(argument) {
		var a = $('<a class="list-group-item" href="#">');
		var h4 = $('<h4 class="list-group-item-heading">');
		h4.text('New note');
		a.append(h4);
		return a;
	};

	$('#addNote').on('click', function(event) {
		var a = addNote();
		a.data('index', index);

		allNotes[index] = {
			content: a,
			favor: false
		};

		$('#allList').append(a);

		$(a).addClass('active').siblings().removeClass('active');
		a.on('click', function(argument) {
			$(this).addClass('active').siblings().removeClass('active');

			favor();
			// console.log(allNotes);
		});
		// init(allNotes);

		index++;
	});

	$('#delNote').on('click', function(event) {
		if ($('.list-group-item')) {
			var item = $('#allList').find('.active');
			var index = item.data('index');
			delete allNotes[index];

			$('.list-group-item').remove('.active');
			$('.list-group-item').eq(0).addClass('active');
			favor();
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

	//判断是否已收藏
	var favor = function() {
		var index = $('.list-group').find('.active').data('index');
		if (isEmptyObject(allNotes)) {
			if (allNotes[index].favor) {
				$('#favor').addClass('starred');
			} else {
				$('#favor').removeClass('starred');

			}
		} else {
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
						$('#' + list).append(item);
						$(item).on('click', function(argument) {
							$('#allList').find('.list-group-item').removeClass('active');
							$(this).addClass('active').siblings().removeClass('active');
							favor();
							// console.log(allNotes);
						});
					}
				}
				break;
			case 'allList':
				for (index in allNotes) {
					var item = allNotes[index].content;
					$(item).data('index', index);
					$('#' + list).append(item);
					// $(item).on('click', function(argument) {

					// 	$(this).addClass('active').siblings().removeClass('active');
					// 	favor();
					// 	// console.log(allNotes);
					// });
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