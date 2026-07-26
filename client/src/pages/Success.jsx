useEffect(() => {
  const activatePro = async () => {
    try {
      await upgradeUser();

      toast.success("TaskFlow Pro Activated!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);

    } catch (error) {
      console.log(
      error.response?.data || error.message
     );
     toast.error("Failed to activate Pro Plan");
     }
  };

  activatePro();

}, [navigate]);
