import React from "react";

export default function Ex02() {
  return (
    <>
      <h2 className="text-green-400">Hình 1.1. Các phần tử nằm bên trái</h2>
      <div flex class="flex justify-start gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <h2 className="text-green-400">Hình 1.2. Các phần tử nằm bên phải</h2>
      <br />
      <div flex class="flex justify-end gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <br />
      <h2 className="text-green-400">Hình 1.3. Các phần tử nằm ở giữa</h2>
      <div flex class="flex justify-center gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <h2 className="text-green-400">Hình 1.4. Các phần tử giãn ra hai bên</h2>
      <br />
      <div flex class="flex justify-between gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <h2 className="text-green-400">Hình 1.5. Các phần tử giãn đều 2 bên</h2>
      <br />
      <div flex class="flex justify-around gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <h2 className="text-green-400">Hình 1.6. Các phần tử giữa đều</h2>
      <br />
      <div flex class="flex justify-evenly gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
      <br />
      <div flex class="flex justify-stretch gap-4 ...">
        <div className="w-[50px] h-[50px] bg-lime-600">1</div>
        <div className="w-[50px] h-[50px] bg-lime-600">2</div>
        <div className="w-[50px] h-[50px] bg-lime-600">3</div>
      </div>
    </>
  );
}
