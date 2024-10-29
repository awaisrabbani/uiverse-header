
const Canvas = (prop) => {
    const {isOpen, children} = prop;
  return (
<>
 <div className={isOpen ? "block " : 'hidden'} >
    <div  >
     {children}
    </div>
 </div>
</>
  )
}

export default Canvas
