    // const handleClick = () => {
    //   const inputData = axios.post('http://localhost:8080/forms', inputValues)
    //         .then(response => {             
    //             alert("İşlem Başarılı " + response.status);
    //             id = response.data.id
    //             setFormList(response.data);
    //             return id;
    //         })
    //         navigate("/form/:id")
    //         const printId = () => {
    //           inputData.then((a) => {              
    //             console.log("inpudata",a);
    //           });
    //         };
    //         printId();
    // }  
    const handleClick = () => {
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inputValues)
      };
      fetch('http://localhost:8080/forms', requestOptions)
          .then(response => {
            response.json()
            alert("Questions are saved to database!"+"Form ID is: " + response.data.id);
          })
          // .then(data => setPostId(data.id))
          .then(data => setFormList(data));
          navigate("/form/:id")
      }
  