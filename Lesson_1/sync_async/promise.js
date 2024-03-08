const promise = new Promise((thanhCong, tuChoi) => { //executor
  // Thực hiện tác vụ bất đồng bộ
  // Nếu thành công, gọi resolve với kết quả
  // Nếu gặp lỗi, gọi reject với thông báo lỗi

  setTimeout(() => {
    const random = Math.random();
    // resolve trả về kết quả thành công
    if (random > 0.5) thanhCong("Promise resolved successfully");
    // reject trả về thông báo lỗi
    else tuChoi("Promise rejected"); // tuChoi = reject
  }, 2000);
});

promise
  .then((result) => {
    // Xử lý kết quả khi Promise đã được giải quyết
    console.log(result);
  })
  .catch((error) => {
    // Xử lý lỗi khi Promise đã bị từ chối
    console.log(error);
  })
  .finally(() => {
    console.log("hết promise rùi");
  }
  );
