function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
    }
    let options = { threshold: [0] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.title_cv');
    for (let elm of elements) {
    observer.observe(elm);
    }

    function onEntry(entry) {
        entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
        });
        }
        let options1 = { threshold: [0] };
        let observer1 = new IntersectionObserver(onEntry, options1);
        let elements1 = document.querySelectorAll('.title_contact');
        for (let elm1 of elements1) {
        observer1.observe(elm1);
        }

        function onEntry(entry) {
            entry.forEach(change => {
            if (change.isIntersecting) {
            change.target.classList.add('element-show');
            }
            });
            }
            let options2 = { threshold: [0] };
            let observer2 = new IntersectionObserver(onEntry, options2);
            let elements2 = document.querySelectorAll('.prog');
            for (let elm of elements2) {
            observer2.observe(elm);
            }

            function onEntry(entry) {
                entry.forEach(change => {
                if (change.isIntersecting) {
                change.target.classList.add('element-show');
                }
                });
                }
                let options3 = { threshold: [0] };
                let observer3 = new IntersectionObserver(onEntry, options3);
                let elements3 = document.querySelectorAll('.form_1');
                for (let elm of elements3) {
                observer3.observe(elm);
                }

                function onEntry(entry) {
                    entry.forEach(change => {
                    if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                    }
                    });
                    }
                    let options4 = { threshold: [0] };
                    let observer4 = new IntersectionObserver(onEntry, options4);
                    let elements4 = document.querySelectorAll('.form_2');
                    for (let elm of elements4) {
                    observer4.observe(elm);
                    }
                    function onEntry(entry) {
                        entry.forEach(change => {
                        if (change.isIntersecting) {
                        change.target.classList.add('element-show');
                        }
                        });
                        }
                        let options5 = { threshold: [0] };
                        let observer5 = new IntersectionObserver(onEntry, options5);
                        let elements5 = document.querySelectorAll('.projects');
                        for (let elm of elements5) {
                        observer5.observe(elm);
                        }
                        function onEntry(entry) {
                            entry.forEach(change => {
                            if (change.isIntersecting) {
                            change.target.classList.add('element-show');
                            }
                            });
                            }
                            let options6 = { threshold: [0] };
                            let observer6 = new IntersectionObserver(onEntry, options6);
                            let elements6 = document.querySelectorAll('.title_case');
                            for (let elm of elements6) {
                            observer6.observe(elm);
                            }