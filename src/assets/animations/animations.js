const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: .5
    }
  },
  exit: {
    opacity: 0
  }
}

const textContainerVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .5
    }
  }
}

const imgVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: .75
    }
  }
}


const placeHolderVariants = {
  hidden: {
    opacity: 1
  },
  visible: {
    opacity: 1
  },
  exit: {
    opacity: 1
  }
}


export { pageAnimation, textContainerVariants, imgVariants, placeHolderVariants };